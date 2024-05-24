import Navbar from '../components/Navbar';
import '../pagesCss/About.css';
function About() {
    return (  
        <>
            <Navbar/>
            <div className="about">
                <div className="about__image">
                    <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="food" className="about__image-item"/>
                </div>
                <div className="about__content">
                    <h1 className="about__content-title">Trang web đặt đồ ăn</h1>
                    <br/>
                    <h5 className="about__content-small-title">Tác giả: Nguyễn Tấn Sang</h5>
                    <p className="about__content-para">Đây là trang web được tạo ra để có thể giúp người dùng tạo sản phẩm, lưu trữ sản phẩm, xóa, chỉnh sửa sản phẩm. Đây là chỉ trang web tạo ra để test những thứ mới được học của người mới nên còn nhiều sai sót. Mong có thể nhận được sự góp ý chân thành của mọi người</p>
                    <p className="about__content-small-para"></p>
                </div>
            </div>
        
        </>
    );
}

export default About;