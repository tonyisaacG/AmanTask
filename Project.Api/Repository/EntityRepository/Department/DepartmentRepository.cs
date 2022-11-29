using Database;
using Repository.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.EntityRepository.Department
{
    public class DepartmentRepository: GenericRepository<Database.Department>, IDepartmentRepository
    {
        public DepartmentRepository(CompanyDbContext context) : base(context) { }
    }
}
