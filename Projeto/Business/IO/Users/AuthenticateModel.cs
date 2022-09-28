using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Business.IO.Users
{
    public class AuthenticateViewModel
    {
        public string Login { get; set; }
        public string Senha { get; set; }
    }
}
