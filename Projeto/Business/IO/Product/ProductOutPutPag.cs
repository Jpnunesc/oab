
using System.Collections.Generic;

namespace Business.IO.Product
{
   public class ProductOutPutPag
    {
        public ProductOutPutPag(int totalItems, IEnumerable<ProductOutPut> product)
        {
            TotalItems = totalItems;
            Product = product;
        }

        public int TotalItems { get; set; }
        public IEnumerable<ProductOutPut> Product { get; set; }
    }
}
