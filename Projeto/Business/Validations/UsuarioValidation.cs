using Business.IO.Users;
using FluentValidation;


namespace Business.Validations
{
    public class UsuarioValidation : AbstractValidator<AuthenticateViewModel>
    {
        public UsuarioValidation()
        {
           RuleFor(f => f.Senha)
              .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");
            RuleFor(f => f.Login)
               .NotEmpty().WithMessage("O campo {PropertyName} precisa ser fornecido");
        }    
    }
}