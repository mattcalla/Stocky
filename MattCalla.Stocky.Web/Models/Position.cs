namespace MattCalla.Stocky.Web.Models
{
    public class Position
    {
        public string Symbol { get; set; }
        public int Quantity { get; set; }
        public decimal CurrentPrice { get; set; }
        public decimal IdealAllocation { get; set; }
    }
}