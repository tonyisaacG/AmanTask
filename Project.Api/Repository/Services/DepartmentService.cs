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
    public class DepartmentService
    {
        private readonly IUnitOfWork _unitOfWork;

        public DepartmentService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;

        }
        public List<Department> GetAll()
        {
            var departments = _unitOfWork.Department.FindAll().ToList();
            return departments;
        }


        public bool? Add(DepartmentVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                var departent = AutoMapperConfig.mapperModel.Map<Department>(entity);
                _unitOfWork.Department.Create(departent);
                _unitOfWork.Save();
                return true;
            }
            catch
            {
                return false;
            }
        }

        public Department? GetOne(int id)
        {
            try
            {
                if (id <= 0)
                    return null;
                var data = _unitOfWork.Department.FindByCondition(dept => dept.Id == id).FirstOrDefault();
                if (data == null)
                    return null;
                return data;
            }
            catch { return null; }
        }

        public bool? Delete(DepartmentVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                var depart = _unitOfWork.Department.FindByCondition(dept => dept.Id == entity.Id).FirstOrDefault();
                if (depart == null)
                    return null;
                //var department = AutoMapperConfig.mapperModel.Map<Department>(entity);
                _unitOfWork.Department.Delete(depart);
                _unitOfWork.Save();
                return true;
            }
            catch { return false; }
        }

        public bool? Update(DepartmentVM entity)
        {
            try
            {
                if (entity == null)
                    return null;
                var department = AutoMapperConfig.mapperModel.Map<Department>(entity);
                _unitOfWork.Department.Update(department);
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
