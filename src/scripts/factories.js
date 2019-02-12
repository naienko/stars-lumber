const codeEmployee = singleEmployee => {
    return `<article class="employee">
    <header class="employee__name">
        <h1>${singleEmployee.first_name} ${singleEmployee.last_name}</h1>
    </header>
    <section class="employee__department">
        Works in the ${singleEmployee.department.dept_name} department
    </section>
    <section class="employee__computer">
        Currently using a ${singleEmployee.computer.make} ${singleEmployee.computer.model}
    </section>
</article>`;
};

export default codeEmployee;