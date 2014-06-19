namespace MattCalla.Stocky.Web.Models
{
    public class Position
    {
        public string Symbol { get; set; }
        public int Quantity { get; set; }
        public decimal CurrentPrice { get; set; }

        public decimal ActualAllocationPercentage { get; set; }
        public decimal ActualAllocationAmount { get; set; }

        public decimal IdealAllocationPercentage { get; set; }
        public decimal IdealAllocationAmount { get; set; }

        public void CalculateAssetAllocation(decimal portfolioTotalAmount)
        {
            ActualAllocationAmount = CurrentPrice*Quantity;
            ActualAllocationPercentage = (ActualAllocationAmount / portfolioTotalAmount) * 100m;

            IdealAllocationAmount = portfolioTotalAmount * (IdealAllocationPercentage / 100);
        }
    }
}