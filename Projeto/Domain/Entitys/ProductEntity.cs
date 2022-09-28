using Domain.Entity;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Domain.Entitys
{
    public class ProductEntity : BaseEntity
    {
        //public ProductEntity(int id, string sku, string name, DateTime dateRegister, string description, string image, decimal price)
        //{
        //    Id = id;
        //    Price = price;
        //    Sku = sku;
        //    Name = name;
        //    DateRegister = dateRegister;
        //    Description = description;
        //    Image = image;
        //}
        public string Sku { get;  set; }
        public string Name { get; set; }
        public DateTime DateRegister { get; set; }
        public string Description { get; set; }
        [Column(TypeName = "CLOB")]
        public string Image { get; set; }
        public int Status { get; set; }
        public decimal Price { get; set; }

    }
}
