using AutoMapper;
using Business.IO.Product;
using Business.IO.Users;
using Domain.Entity;
using Domain.Entitys;

namespace Business.AutoMapper
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ProductEntity, ProductInput>();
            CreateMap<ProductInput, ProductEntity>();
            CreateMap<ProductEntity, ProductOutPut>();
            CreateMap<ProductOutPut, ProductEntity>();
            CreateMap<ProductInput, ProductOutPut>();
            CreateMap<ProductOutPut, ProductInput>();

            CreateMap<UserAuthView, UserEntity>();
            CreateMap<UserEntity, UserAuthView>();


        }
    }

}