
namespace Business.IO.Product
{
    public class ProductFilter : FilterPag
    {
        public int? Id { get; set; }
        public string Name { get; set; }
        public string Sku { get; set; }
    }
}