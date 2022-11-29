using Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntityRepository.Department
{
    public interface IEmployeeRepository : IGenericRepository<Database.Employee>
    {
    }
}
