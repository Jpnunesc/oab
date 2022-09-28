using System;
using System.Collections.Generic;
using System.Text;

namespace Business.IO
{
   public class FilterPag
    {
        public string SortField { get; set; }
        public string SortOrder { get; set; }
        public int? PageSize { get; set; }
        public int? Page { get; set; }
        public string Search { get; set; }
    }
}
