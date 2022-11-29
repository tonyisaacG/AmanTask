using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Database
{
    public enum Geneder
    {
        Male,
        Femmale
    }
    
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime DoB { get; set; }
        public Geneder Geneder { get; set; }
        public double Salary { get; set; }
        public string Address { get; set; }

        [ForeignKey(nameof(Department))]
        public int Department_Id { get; set; }
        public virtual Department Department { get; set; }

    }
}
