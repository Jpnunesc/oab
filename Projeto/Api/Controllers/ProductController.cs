using Business.Interfaces.Services;
using Business.IO;
using Business.IO.Product;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System;
using System.Threading.Tasks;

namespace Api.Controllers
{

    [ApiController]
    [Route("api/[controller]")]

    public class ProductController : ControllerBase
    {
        private IProductService _service;
        public string MessageErro = "Erro interno!";
        public ProductController(IProductService service)
        {
            _service = service;
        }

        [HttpPost]
        [DisableRequestSizeLimit]
        //TODO: Deve-se color uma validação do tamanho da imagem no front para padronizar a requisição.
        public async Task<IActionResult> Post([FromForm] ProductInput _product)
        {
            try
            {
               _product = JsonConvert.DeserializeObject<ProductInput>(Request.Form["product"]);
                return Ok(await _service.Save(_product));
            }
            catch (Exception ex)
            {
                return BadRequest(new ReturnView() { Object = ex.GetBaseException(), Message = MessageErro, Status = false });
            }
        }

        [HttpPut]
        public async Task<IActionResult> Put([FromBody] ProductInput _product)
        {
            try
            {
                return Ok(await _service.Edit(_product));
            }
            catch (Exception ex)
            {
                return BadRequest(new ReturnView() { Object = ex.GetBaseException(), Message = MessageErro, Status = false });
            }
        }

        [HttpDelete]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                return Ok(await _service.Delete(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new ReturnView() { Object = ex.GetBaseException(), Message = MessageErro, Status = false });
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            try
            {
                return Ok(await _service.Get(id));
            }
            catch (Exception ex)
            {
                return BadRequest(new ReturnView() { Object = ex.GetBaseException(), Message = MessageErro, Status = false });
            }
        }

        [HttpGet]
        public async Task<IActionResult> GetMany([FromQuery] ProductFilter _filter)
        {
            try
            {
                return Ok(await _service.GetMany(_filter));
            }
            catch (Exception ex)
            {
                return BadRequest(new ReturnView() { Object = ex.GetBaseException(), Message = MessageErro, Status = false });
            }
        }
    }
}
