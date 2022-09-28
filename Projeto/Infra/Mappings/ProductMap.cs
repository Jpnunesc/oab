using Domain.Entitys;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
namespace Infra.Mappings
{
    [DbContext(typeof(Context.CodeContext))]
    public class ProductMap
    {
        public ProductMap(EntityTypeBuilder<ProductEntity> builder)
        {
            builder.ToTable("Product");
            builder.HasKey(t => t.Id);

            builder.Property(t => t.Id)
                 .HasColumnName("Id")
                 .ValueGeneratedOnAdd();

            builder.Property(t => t.Name)
                .HasColumnName("Name")
                 .HasMaxLength(100)
                .IsRequired();

            builder.Property(t => t.Status)
                .HasColumnName("Status")
                 .HasMaxLength(1)
                .IsRequired();

            builder.Property(t => t.Sku)
                   .HasColumnName("Sku")
                   .IsRequired();

            builder.Property(t => t.DateRegister)
                   .HasColumnName("DateRegister")
                   .HasColumnType("datetime")
                   .IsRequired();

            builder.Property(t => t.Price)
                   .HasColumnName("Price")
                   .HasColumnType("decimal(18,4)")
                   .IsRequired();

            builder.Property(t => t.Description)
                   .HasColumnName("Description")
                   .HasMaxLength(100);

            builder.Property(t => t.Image)
                   .HasColumnName("Image")
                   .HasColumnType("varchar(MAX)")
                   .IsRequired();
        }

    }
}
