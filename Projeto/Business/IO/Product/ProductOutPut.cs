using System;

namespace Business.IO.Product
{
    public class ProductOutPut
    {
        public int Id { get; set; }
        public string Sku { get; private set; }
        public string Name { get; private set; }
        public DateTime? DateRegister { get; private set; }
        public string Description { get; private set; }
        public string Image { get; private set; }
        public decimal Price { get; set; }
        public int Status { get; set; }

        public ReturnView Success()
        {
            return new ReturnView() 
            { Object = new ProductOutPut()
                       { 
                           Id = Id, 
                           Sku = Sku, 
                           Status = Status, 
                           Name = Name, 
                           DateRegister = DateRegister,
                           Description = Description, 
                           Image = Image
                       }, 
                Message = "Operação realizada com sucesso!", 
                Status = true 
            };
        }

    }
}
