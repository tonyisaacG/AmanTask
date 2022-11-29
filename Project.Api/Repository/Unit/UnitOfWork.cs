using Database;
using Repository.EntityRepository.Department;
using Repository.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository.Unit
{
    public class UnitOfWork : IUnitOfWork
    {
        private  IDepartmentRepository department;
        private  IEmployeeRepository employee;
        private readonly CompanyDbContext _context;
        public UnitOfWork(CompanyDbContext context)
        {
            _context = context;
        }
        public IDepartmentRepository Department
        {
            get
            {
                if(department == null)
                    department = new DepartmentRepository(_context);
                return department;
            }
        }
        public IEmployeeRepository Employee
        {
            get
            {
                if(employee == null)
                    employee = new EmployeeRepository(_context);
                return employee;
            }
        }

        public void Save()
        {
            _context.SaveChanges();
        }
    }
}
