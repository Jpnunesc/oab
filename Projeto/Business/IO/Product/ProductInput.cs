using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Business.IO.Product
{
   public class ProductInput
    {
        public int? Id { get; set; }
        public string Sku { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public int Status { get; set; }
        public DateTime? DateRegister { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "CLOB")]
        public string Image { get; set; }



    }
}
