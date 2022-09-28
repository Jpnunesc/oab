using AutoMapper;
using Business.Interfaces.Repositories;
using Business.Interfaces.Services;
using Business.IO.Users;
using System.Threading.Tasks;

namespace Business.Services
{

    public class UserService : IUserService
    {
        private readonly IUserRepository _repository;
        public UserService(IUserRepository repository)
        {
            _repository = repository;
        }
        public async Task<UserAuthView> Get(string username, string password)
        {
            return await _repository.Get(username, password);
        }

    }
}