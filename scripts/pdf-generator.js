// Download roadmap as PDF
function downloadRoadmapPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    const skill = document.getElementById('metaSkill').textContent;
    const level = document.getElementById('metaLevel').textContent;
    const progress = document.getElementById('progressText').textContent;
    
    // Add title
    doc.setFontSize(20);
    doc.setTextColor(109, 103, 228);
    doc.text(`${skill} Learning Roadmap`, 20, 30);
    
    // Add metadata
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text(`Skill Level: ${level}`, 20, 50);
    doc.text(`Progress: ${progress}`, 20, 60);
    doc.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 70);
    
    // Add roadmap content
    let yPosition = 90;
    doc.setFontSize(16);
    doc.setTextColor(0, 0, 0);
    
    const phases = document.querySelectorAll('.timeline-content');
    phases.forEach((phase, index) => {
        if (yPosition > 250) {
            doc.addPage();
            yPosition = 20;
        }
        
        const phaseTitle = phase.querySelector('h3').textContent;
        const phaseDescription = phase.querySelector('p').textContent;
        
        doc.setFontSize(14);
        doc.setTextColor(109, 103, 228);
        doc.text(`Phase ${index + 1}: ${phaseTitle}`, 20, yPosition);
        yPosition += 10;
        
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        const splitDescription = doc.splitTextToSize(phaseDescription, 170);
        doc.text(splitDescription, 20, yPosition);
        yPosition += splitDescription.length * 5 + 10;
        
        // Add weekly tasks
        const weeks = phase.querySelectorAll('.week-header');
        weeks.forEach(week => {
            if (yPosition > 250) {
                doc.addPage();
                yPosition = 20;
            }
            
            const weekTitle = week.querySelector('h4').textContent;
            doc.setFontSize(12);
            doc.setTextColor(0, 0, 0);
            doc.text(weekTitle, 25, yPosition);
            yPosition += 8;
            
            const tasks = week.nextElementSibling.querySelectorAll('.task-item');
            tasks.forEach(task => {
                if (yPosition > 250) {
                    doc.addPage();
                    yPosition = 20;
                }
                
                const taskText = task.querySelector('h5').textContent;
                const isCompleted = task.querySelector('.task-checkbox').classList.contains('checked');
                
                doc.setFontSize(10);
                doc.setTextColor(isCompleted ? 0 : 150, 0 : 0, 0);
                doc.text(`• ${taskText} ${isCompleted ? '✓' : ''}`, 30, yPosition);
                yPosition += 6;
            });
            yPosition += 5;
        });
        yPosition += 10;
    });
    
    // Save the PDF
    doc.save(`${skill}-Learning-Roadmap.pdf`);
}
