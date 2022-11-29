using Database;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ViewModels.VModels
{
    public class EmployeeVM
    {
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        public string LastName { get; set; }
        [Required]
        
        public DateTime DoB { get; set; }
        [Required]
        public Geneder Geneder { get; set; }
        [Required,Range(minimum:1,maximum:double.MaxValue)]
        public double Salary { get; set; }
        public string Address { get; set; }
        [Required]
        public int Department_Id { get; set; }
    }
}
