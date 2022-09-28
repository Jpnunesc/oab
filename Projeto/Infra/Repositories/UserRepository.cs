using Business.Interfaces.Repositories;
using Business.IO.Users;
using Domain.Entity;
using Infra.Context;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Infra.Repositories
{
    public class UserRepository : RepositoryBase<Context.CodeContext, UserEntity>, IUserRepository
    {
        public UserRepository(Context.CodeContext context) : base(context)
        {

        }

        public async Task<UserAuthView> Get(string username, string password)
        {
            if(username == "sup" && password == "sup")
            {
                return await Task.Run(() => new UserAuthView { Nome = "sup", Senha = "sup", Role = "manager" });
            }
            return null;

        }
    }
}
