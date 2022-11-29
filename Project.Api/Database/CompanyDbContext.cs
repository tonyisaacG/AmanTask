using Microsoft.EntityFrameworkCore;

namespace Database
{
    public class CompanyDbContext:DbContext
    {
        public CompanyDbContext(DbContextOptions options) : base(options) { }

        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
    }
}