using Business.IO;
using Business.IO.Product;
using System.Threading.Tasks;

namespace Business.Interfaces.Services
{
    public interface IProductService
    {
        Task<ReturnView> Save(ProductInput _student);
        Task<ReturnView> Edit(ProductInput _student);
        Task<ReturnView> Delete(int id);
        Task<ReturnView> Get(int id);
        Task<ReturnView> GetMany(ProductFilter _filter);
    }
}
