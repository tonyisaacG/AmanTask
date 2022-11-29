using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels.VModels
{
    public class ResponseMessageVM
    {
        public bool Success { get; set; }
        public object? Data { get; set; }
        public IList<string>? Errors { get; set; }
        public object? States { get; set; }
    }
}
