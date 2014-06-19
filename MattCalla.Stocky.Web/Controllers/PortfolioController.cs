using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Diagnostics;
using System.Linq;
using System.Web.Http;
using MattCalla.Stocky.Core.Database;
using MattCalla.Stocky.Web.Models;

namespace MattCalla.Stocky.Web.Controllers
{
    [AllowAnonymous]
    [Route("api/Portfolio/{action}")]
    public class PortfolioController : ApiController
    {
        [Route("api/Portfolio")]
        [HttpGet]
        public IEnumerable<Position> GetPositions()
        {
            using (var db = new DatabaseSession())
            {
                var positions = db.Query<Position>().OrderBy(p => p.Symbol).ToList();

                var portfolio = new Portfolio(positions);   //This calculates the asset allocation
                return portfolio.Positions;
            }
        }



        [Route("api/Portfolio")]
        [HttpPost]
        public void CreatePosition(Position model)
        {
            using (var db = new DatabaseSession())
            {
                var existingPosition = db.Query<Position>().FirstOrDefault(p => p.Symbol == model.Symbol);
                if (existingPosition != null)
                {
                    existingPosition.Quantity += model.Quantity;
                }
                else
                {
                    db.Add(model);
                }
            }

        }

        [Route("api/Portfolio/{symbol}")]
        [HttpDelete]
        public void DeletePosition(string symbol)
        {
            using (var db = new DatabaseSession())
            {
                var position = db.Query<Position>().FirstOrDefault(p => p.Symbol == symbol);
                db.Remove(position);
            }
        }
    }
}
