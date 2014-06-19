using System.Collections.Generic;
using System.Linq;

namespace MattCalla.Stocky.Web.Models
{
    public class Portfolio
    {
        public long Id { get; set; }
        public decimal PortfolioTotalAmount { get; set; }
        public List<Position> Positions { get; set; }

        public Portfolio(List<Position> positions)
        {
            Positions = positions;
            PortfolioTotalAmount = positions.Sum(p => p.Quantity*p.CurrentPrice);
            CalculateAssetAllocation();
        }

        private void CalculateAssetAllocation()
        {
            foreach (var position in Positions)
            {
                position.CalculateAssetAllocation(PortfolioTotalAmount);
            }
        }

    }
}