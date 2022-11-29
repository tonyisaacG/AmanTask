using Database;
using Microsoft.EntityFrameworkCore;
using Repository.Unit;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ViewModels.AutoMapper;
using ViewModels.VModels;

namespace Repository.Services
{
    public class EmployeeService
    {
        private readonly IUnitOfWork _unitOfWork;
        public EmployeeService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }



        public List<Employee> GetAll()
        {
            var employee = _unitOfWork.Employee.FindAll().ToList();
            return employee;
        }

        public bool? Add(EmployeeVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                

                var employee = AutoMapperConfig.mapperModel.Map<Employee>(entity);
                
                _unitOfWork.Employee.Create(employee);
                _unitOfWork.Save();
                return true;
            }
            catch
            {
                return false;
            }
        }

        
        public Employee? GetOne(int id)
        {
            try
            {
                if (id <= 0)
                    return null;
                var data = _unitOfWork.Employee.FindByCondition(dept => dept.Id == id).Include(dpt=>dpt.Department).FirstOrDefault();

                if (data == null)
                    return null;
                return data;
            }
            catch { return null; }
        }

        public bool? Delete(EmployeeVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                var employee = _unitOfWork.Employee.FindByCondition(dept => dept.Id == entity.Id).FirstOrDefault();
                if (employee == null)
                    return null;
                //var employee = AutoMapperConfig.mapperModel.Map<Employee>(entity);
                _unitOfWork.Employee.Delete(employee);
                _unitOfWork.Save();
                return true;
            }
            catch { return false; }
        }

        public bool? Update(EmployeeVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                var employee = _unitOfWork.Employee.FindByCondition(dept => dept.Id == entity.Id).FirstOrDefault();
                if (employee == null)
                    return null;
                _unitOfWork.Employee.Update(employee);
                _unitOfWork.Save();
                return true;
            }
            catch (DbUpdateException e)
            {
                return false;
            }
        }
    }
}
