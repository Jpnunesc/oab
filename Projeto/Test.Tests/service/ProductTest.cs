
using AutoMapper;
using Moq;
using Xunit;
using Business.Services;
using Business.Interfaces.Repositories;
using Domain.Entitys;
using System.Threading.Tasks;
using Business.IO.Product;

namespace Test.Tests.service
{
    public class ProdutoTest
    {
        Mock<IMapper> mapper = new();
        Mock<IProductRepository> mockRepository = new();
        [Fact(DisplayName = "Salvar Produto")]
        public void RegisterProductWithCorrectDataMustReturnRegistered()
        {
            
            ProductService service = new(mapper.Object, mockRepository.Object);
            var body = new ProductInput
            {
                  Name= "teste",
                  Price= 10,
                  Description= "teste",
                  Image= "nASDFJSDMNJHASDFnohDFNOADSVNOVHSDAVNOHaasdfncohANOÍHDMNsdihDFdfnovihSVDNÓSVHNsvsdnosdvihsdnuhvbasovn",
                  Sku="123456789",
                  Status= 1
            };
            mockRepository.Setup(s => s.Add(It.IsAny<ProductEntity>())).Returns(Task.FromResult(new ProductEntity()));
            var result = service.Save(body);
            Assert.True(result.Result.Status);

        }
    }
}
