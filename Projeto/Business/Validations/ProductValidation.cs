
using Business.IO.Product;
using FluentValidation;


namespace Business.Validations
{
    public class ProductValidation : AbstractValidator<ProductInput>
    {
        public ProductValidation()
        {
            RuleFor(f => f.Name)
              .NotEmpty().WithMessage("Campo Nome obrigatório!");

            RuleFor(f => f.Sku)
                .NotEmpty().WithMessage("Campo Código de barrasobrigatório!");

            RuleFor(f => f.Price)
                .NotEmpty().WithMessage("Campo Preço obrigatório!");

            RuleFor(f => f.Status)
                .NotEmpty().WithMessage("Campo Status obrigatório!");
        }
    }
}