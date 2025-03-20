// 等待DOM完全加载
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏滚动效果
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 获取目标元素
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // 平滑滚动到目标元素
            window.scrollTo({
                top: targetElement.offsetTop - 70, // 减去导航栏高度
                behavior: 'smooth'
            });
        });
    });
    
    // 添加导航栏滚动时的阴影效果
    window.addEventListener('scroll', function() {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
        }
    });
    
    // 添加简单的页面加载动画
    const sections = document.querySelectorAll('section');
    
    function fadeInSections() {
        sections.forEach(section => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        });
    }
    
    // 初始样式设置
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // 延迟执行淡入效果
    setTimeout(fadeInSections, 300);
});
