using Business.IO.Product;
using Domain.Entitys;
using System.Threading.Tasks;

namespace Business.Interfaces.Repositories
{
    public interface IProductRepository : IRepositoryBase<ProductEntity>
    {
        Task<ProductOutPutPag> GetFilter(ProductFilter filter);
    }
}
