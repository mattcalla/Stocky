using System;
using System.Linq;
using Raven.Client;
using Raven.Client.Document;
using Raven.Client.Embedded;
using Raven.Database.Config;
using Raven.Database.Server;

namespace MattCalla.Stocky.Core.Database
{
    public class DatabaseSession : IDisposable
    {
        private static readonly DocumentStore DocumentStore;

        static DatabaseSession()
        {
            var ravenPort = 8181;
            NonAdminHttp.EnsureCanListenToWhenInNonAdminContext(ravenPort);

            DocumentStore = new EmbeddableDocumentStore()
            {
                DataDirectory = @"~\App_Data\RavenDB",
                //UseEmbeddedHttpServer = true,
                UseEmbeddedHttpServer = false,
                Configuration = {Port = 8081, DatabaseName = "Stocky"}
            };
            DocumentStore.Initialize();
        }

        private readonly IDocumentSession _session;

        public DatabaseSession()
        {
            _session = DocumentStore.OpenSession();
        }

        public void Add(object model)
        {
            _session.Store(model);
        }

        public IQueryable<T> Query<T>()
        {
             return _session.Query<T>();
        }

        public void Remove(object model)
        {
            _session.Delete(model);
        }

        public void Dispose()
        {
            _session.SaveChanges();
        }

        
    }
    
}
