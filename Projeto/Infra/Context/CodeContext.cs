using Domain.Entity;
using Domain.Entitys;
using Infra.Mappings;
using Microsoft.EntityFrameworkCore;



namespace Infra.Context
{
    public class CodeContext : DbContext
    {
        public CodeContext(DbContextOptions<CodeContext> options)
      : base(options)
        {
        }
        public DbSet<ProductEntity> Products { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            new ProductMap(modelBuilder.Entity<ProductEntity>());
        }
    }
}
