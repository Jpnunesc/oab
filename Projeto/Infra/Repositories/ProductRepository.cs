using AutoMapper;
using Business.Interfaces.Repositories;
using Business.IO.Product;
using Domain.Entitys;
using Infra.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infra.Repositories
{
    public class ProductRepository : RepositoryBase<CodeContext, ProductEntity>, IProductRepository
    {
        private readonly IMapper _mapper;
        public ProductRepository(CodeContext context, IMapper mapper) : base(context)
        {
            _mapper = mapper;
        }
        public async Task<ProductOutPutPag> GetFilter(ProductFilter filter)
        {
            var query = DbSet.AsQueryable();
            var totalItems = 0;
            if (!string.IsNullOrEmpty(filter.Name))
            {
                query = query.Where(x => x.Name == filter.Name);
            }
            if (!string.IsNullOrEmpty(filter.Sku))
            {
                query = query.Where(x => x.Sku.Contains(filter.Sku));
            }
            if (filter.Id.HasValue)
            {
                query = query.Where(x => x.Id == filter.Id);
            }
            filter.Page = filter.Page ?? 1;
            filter.PageSize = filter.PageSize ?? 10;
            var skip = (filter.Page.Value - 1) * filter.PageSize.Value;
            totalItems = query.AsNoTracking().Count();

            var listProduct = await query
                    .AsNoTracking()
                    .Skip(skip)
                    .Take(filter.PageSize.Value)
                    .ToListAsync();

            var listOutPut = _mapper.Map<List<ProductEntity>, List<ProductOutPut>>(listProduct);

            return new ProductOutPutPag(totalItems, listOutPut);
        }

    }
}
