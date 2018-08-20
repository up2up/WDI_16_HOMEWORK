class StudentsController < ApplicationController

  def index
    @students = Student.all
  end

  def show
    @student = Student.find(params[:id])
  end

  def create
    @student = Student.new(student_params) 
    @student.house_id = rand(1..4)
    if @student.save
      redirect_to '/students'
    else
      render :new
    end
  end

  def new
    @student = Student.new
  end

  def student_params
    params.require(:student).permit(:name, :img_url)
  end

 
end
