using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json.Serialization;
using System.Threading.Tasks;

namespace Database
{
    public class Department
    {
        public int Id { get; set; }
        public string Name{ get; set; }
        public string Location { get; set; }

        [JsonIgnore]
        public virtual ICollection<Employee> Employees { get; set; }

    }
}
