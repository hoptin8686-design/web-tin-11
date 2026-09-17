import { Question } from "@/lib/types";

// Bài 15: Bảo mật và an toàn hệ cơ sở dữ liệu
export const questions: Question[] = [
  {
    "id": "b15-01",
    "q": "Mục tiêu quan trọng hàng đầu của công tác bảo mật và an toàn hệ cơ sở dữ liệu là gì?",
    "options": [
      "Bảo vệ dữ liệu khỏi sự truy cập, sửa đổi, phá hoại trái phép và đảm bảo tính bí mật, toàn vẹn, khả dụng của hệ thống",
      "Ngăn chặn mọi người không cho ai sử dụng máy tính",
      "Tăng gấp đôi tốc độ hiển thị màu sắc trên màn hình",
      "Tự động xóa CSDL sau mỗi học kỳ"
    ],
    "answer": 0,
    "explain": "Bảo mật CSDL đảm bảo tam giác an ninh CIA: Confidentiality (Bí mật), Integrity (Toàn vẹn) và Availability (Sẵn sàng/Khả dụng)."
  },
  {
    "id": "b15-02",
    "q": "Cơ chế 'Xác thực người dùng' (Authentication) trong hệ CSDL nhằm mục đích:",
    "options": [
      "Xác minh danh tính của người đang cố gắng đăng nhập vào hệ thống (thông qua tài khoản, mật khẩu, mã OTP, vân tay...)",
      "Kiểm tra xem máy tính có bị bám bụi bẩn hay không",
      "Đo tốc độ đánh máy của người sử dụng",
      "Đổi tên người dùng sang tiếng nước ngoài"
    ],
    "answer": 0,
    "explain": "Xác thực trả lời cho câu hỏi: 'Bạn là ai?' bằng cách kiểm chứng tên đăng nhập và mật khẩu hợp lệ."
  },
  {
    "id": "b15-03",
    "q": "Cơ chế 'Phân quyền người dùng' (Authorization) trong hệ CSDL xác định điều gì?",
    "options": [
      "Xác định người dùng đã đăng nhập được phép thực hiện những thao tác cụ thể nào (chỉ đọc SELECT, hay được INSERT, UPDATE, DELETE) trên bảng nào",
      "Người dùng được phép sử dụng máy tính trong phòng mấy tiếng",
      "Người dùng có được phép uống nước khi ngồi máy tính hay không",
      "Màu áo mà người dùng phải mặc khi đến trường"
    ],
    "answer": 0,
    "explain": "Phân quyền trả lời cho câu hỏi: 'Bạn được phép làm gì?' trên từng bảng hoặc từng cột cụ thể của CSDL."
  },
  {
    "id": "b15-04",
    "q": "Câu lệnh SQL nào được dùng để CẤP quyền thao tác trên bảng cho một tài khoản người dùng?",
    "options": [
      "GRANT",
      "REVOKE",
      "ALLOW",
      "PERMIT"
    ],
    "answer": 0,
    "explain": "Cú pháp: GRANT <quyền> ON <bảng> TO <người_dùng>; dùng để cấp quyền truy cập."
  },
  {
    "id": "b15-05",
    "q": "Câu lệnh SQL nào dùng để THU HỒI (hủy bỏ) quyền đã cấp cho người dùng?",
    "options": [
      "REVOKE",
      "CANCEL",
      "DENY",
      "REMOVE"
    ],
    "answer": 0,
    "explain": "Cú pháp: REVOKE <quyền> ON <bảng> FROM <người_dùng>; dùng để rút lại quyền hạn."
  },
  {
    "id": "b15-06",
    "q": "Kỹ thuật 'Mã hóa dữ liệu' (Data Encryption) trong cơ sở dữ liệu có tác dụng:",
    "options": [
      "Chuyển đổi dữ liệu gốc (bản rõ) thành dạng chuỗi ký tự khó hiểu (bản mã) bằng thuật toán mã hóa để kẻ trộm có lấy được tệp cũng không đọc được nội dung",
      "Làm tăng kích thước tệp tin lên gấp 100 lần",
      "Tự động dịch văn bản sang tiếng Pháp",
      "Xóa sạch các số điện thoại có trong bảng"
    ],
    "answer": 0,
    "explain": "Mã hóa bảo vệ dữ liệu nhạy cảm (như mật khẩu, số thẻ ngân hàng): chỉ người có chìa khóa giải mã (Key) mới đọc được."
  },
  {
    "id": "b15-07",
    "q": "Mật khẩu của người dùng khi lưu trữ trong cơ sở dữ liệu an toàn BẮT BUỘC phải được xử lý như thế nào?",
    "options": [
      "Mã hóa băm một chiều (Hash) kết hợp muối (Salt) chứ tuyệt đối không lưu dưới dạng văn bản thô (Plain text)",
      "Lưu công khai bằng chữ hoa để người quản trị dễ đọc",
      "In ra giấy dán lên tường phòng máy chủ",
      "Gửi qua email công cộng hàng tuần"
    ],
    "answer": 0,
    "explain": "Lưu mật khẩu thô là lỗ hổng bảo mật nghiêm trọng; bắt buộc phải băm (như bcrypt, SHA-256) để người quản trị CSDL cũng không thấy mật khẩu gốc."
  },
  {
    "id": "b15-08",
    "q": "Phương pháp 'Sao lưu đầy đủ' (Full Backup) trong CSDL có nghĩa là:",
    "options": [
      "Sao chép toàn bộ tất cả dữ liệu, cấu trúc bảng, chỉ mục và tài khoản của toàn bộ CSDL ra tệp lưu trữ dự phòng tại một thời điểm",
      "Chỉ sao lưu các dòng mới nhập trong 5 phút vừa qua",
      "Chỉ chụp ảnh màn hình máy tính",
      "Sao chép duy nhất một bảng có dung lượng nhỏ nhất"
    ],
    "answer": 0,
    "explain": "Full Backup tạo một bản sao hoàn chỉnh 100% của toàn bộ CSDL, là nền móng cho mọi chiến lược phục hồi dữ liệu."
  },
  {
    "id": "b15-09",
    "q": "Tệp 'Nhật ký hệ thống' (Log file / Audit trail) có vai trò gì trong việc điều tra sự cố bảo mật?",
    "options": [
      "Lưu vết chi tiết: ai (tài khoản nào) đã thực hiện câu lệnh gì, vào thời điểm nào, từ địa chỉ IP nào để phục vụ việc truy vết thủ phạm",
      "Tự động đăng ảnh thủ phạm lên mạng xã hội",
      "Tự động khóa tài khoản của tất cả học sinh",
      "Tắt nguồn máy chủ để kẻ gian không trốn thoát"
    ],
    "answer": 0,
    "explain": "Nhật ký kiểm toán (Audit Log) ghi nhận không thể sửa đổi mọi hành vi truy cập và thao tác dữ liệu, làm bằng chứng điều tra an ninh."
  },
  {
    "id": "b15-10",
    "q": "Hình thức tấn công 'SQL Injection' (Tiêm mã SQL) là lỗ hổng bảo mật xảy ra khi nào?",
    "options": [
      "Kẻ tấn công chèn các đoạn mã lệnh SQL độc hại vào các ô nhập liệu của trang web (như ô đăng nhập, ô tìm kiếm) để lừa máy chủ thực thi trái phép",
      "Tiêm thuốc hóa học vào vỏ máy tính để làm hỏng mạch điện",
      "Cắt đứt dây mạng Internet của máy chủ CSDL",
      "Ăn trộm bàn phím máy tính trong phòng thực hành"
    ],
    "answer": 0,
    "explain": "SQL Injection lợi dụng việc phần mềm không kiểm tra kỹ dữ liệu đầu vào, chèn mã SQL (như ' OR '1'='1) để vượt qua bước xác thực hoặc lấy sạch dữ liệu."
  },
  {
    "id": "b15-11",
    "q": "Biện pháp phòng chống tấn công SQL Injection hiệu quả nhất cho các lập trình viên phần mềm là gì?",
    "options": [
      "Sử dụng câu lệnh có tham số hóa (Parameterized Queries / Prepared Statements) và kiểm tra chặt chẽ dữ liệu đầu vào (Input Validation)",
      "Cấm người dùng không được gõ phím từ bàn phím",
      "Tắt màn hình máy chủ CSDL liên tục",
      "Chỉ cho phép người thân trong gia đình đăng nhập phần mềm"
    ],
    "answer": 0,
    "explain": "Prepared Statements tách rời hoàn toàn mã lệnh SQL và dữ liệu nhập vào, ngăn chặn mã tiêm độc hại bị thực thi nhầm như câu lệnh."
  },
  {
    "id": "b15-12",
    "q": "Trong nhà trường, học sinh đăng nhập vào hệ thống quản lý học tập thường CHỈ ĐƯỢC CẤP quyền nào sau đây đối với bảng ĐIỂM?",
    "options": [
      "Chỉ có quyền xem (SELECT) điểm của chính bản thân mình",
      "Quyền chỉnh sửa (UPDATE) điểm cho cả lớp",
      "Quyền xóa (DELETE) toàn bộ bảng điểm của khối",
      "Quyền thay đổi cấu trúc bảng điểm"
    ],
    "answer": 0,
    "explain": "Nguyên tắc đặc quyền tối thiểu (Least Privilege): học sinh chỉ có quyền đọc điểm của mình, tuyệt đối không có quyền sửa xóa điểm."
  },
  {
    "id": "b15-13",
    "q": "Giáo viên bộ môn thường được cấp quyền nào đối với cột điểm của môn học mình phụ trách?",
    "options": [
      "Quyền xem (SELECT), nhập mới (INSERT) và cập nhật sửa đổi (UPDATE) điểm môn học của các lớp mình dạy",
      "Quyền xóa sạch toàn bộ hệ thống cơ sở dữ liệu nhà trường",
      "Quyền đổi mật khẩu máy chủ của ban giám hiệu",
      "Quyền cấp tài khoản mới cho người ngoài trường"
    ],
    "answer": 0,
    "explain": "Giáo viên được cấp quyền đọc và ghi dữ liệu điểm môn mình phụ trách, không được can thiệp vào điểm của môn giáo viên khác."
  },
  {
    "id": "b15-14",
    "q": "Giao thức mạng nào dùng để mã hóa toàn bộ dữ liệu truyền giữa trình duyệt của người dùng và máy chủ CSDL qua Internet?",
    "options": [
      "SSL / TLS (thông qua HTTPS)",
      "HTTP không mã hóa",
      "FTP truyền tệp thô",
      "Telnet văn bản rõ"
    ],
    "answer": 0,
    "explain": "SSL/TLS thiết lập đường truyền mã hóa an toàn, ngăn chặn kẻ xấu trên đường truyền nghe lén hoặc sửa đổi gói tin."
  },
  {
    "id": "b15-15",
    "q": "Khi xảy ra sự cố cháy nổ phòng máy chủ CSDL, biện pháp nào giúp nhà trường khôi phục lại dữ liệu hoàn chỉnh nhất?",
    "options": [
      "Sử dụng bản sao lưu dự phòng (Backup) được lưu trữ tại một trung tâm dữ liệu đám mây hoặc vị trí địa lý khác",
      "Chờ lính cứu hỏa dập lửa xong rồi bật máy lên xem còn chạy không",
      "Tự nhớ lại điểm của 1000 học sinh rồi gõ lại vào sổ tay",
      "Cho tất cả học sinh trong trường nghỉ học vĩnh viễn"
    ],
    "answer": 0,
    "explain": "Kế hoạch ứng phó thảm họa (Disaster Recovery Plan) dựa trên các bản sao lưu lưu trữ ngoại vi (Off-site / Cloud Backup)."
  },
  {
    "id": "b15-16",
    "q": "Tường lửa cơ sở dữ liệu (Database Firewall) có chức năng chính là gì?",
    "options": [
      "Phân tích các câu truy vấn SQL gửi tới máy chủ, phát hiện và ngăn chặn các hành vi tấn công dữ liệu hoặc truy vấn bất thường",
      "Bơm nước dập lửa khi ổ cứng bị nóng",
      "Khóa cửa ra vào phòng đặt máy chủ",
      "Tự động tăng giá tiền điện của máy tính"
    ],
    "answer": 0,
    "explain": "Database Firewall giám sát các câu lệnh SQL ở tầng ứng dụng, lập tức chặn đứng các truy vấn SQL Injection độc hại."
  },
  {
    "id": "b15-17",
    "q": "Hành vi nào sau đây của nhân viên quản trị là VI PHẠM nghiêm trọng nguyên tắc an toàn CSDL?",
    "options": [
      "Chia sẻ mật khẩu tài khoản quản trị 'root/sa' cho nhiều người dùng chung và không đổi mật khẩu định kỳ",
      "Định kỳ kiểm tra tệp nhật ký hệ thống hàng tuần",
      "Bật tính năng xác thực hai yếu tố khi truy cập từ xa",
      "Mã hóa toàn bộ các bản sao lưu dữ liệu"
    ],
    "answer": 0,
    "explain": "Dùng chung tài khoản quản trị tối cao khiến không thể truy trách nhiệm khi xảy ra sự cố và nguy cơ bị lộ mật khẩu rất cao."
  },
  {
    "id": "b15-18",
    "q": "Tại sao các bản sao lưu CSDL (Backup files) cũng BẮT BUỘC phải được mã hóa và bảo vệ cẩn mật?",
    "options": [
      "Vì kẻ xấu nếu đánh cắp được tệp sao lưu thì có thể mang về máy cá nhân khôi phục lại để xem toàn bộ dữ liệu mật",
      "Vì nếu không mã hóa thì tệp sao lưu sẽ tự động bốc cháy",
      "Vì dung lượng tệp sao lưu sẽ bị giảm đi",
      "Vì pháp luật cấm lưu tệp sao lưu"
    ],
    "answer": 0,
    "explain": "Tệp sao lưu chứa toàn bộ bí mật của hệ thống; nếu để tệp sao lưu trôi nổi không mã hóa thì hệ thống an ninh coi như bị vô hiệu hóa."
  },
  {
    "id": "b15-19",
    "q": "Quy tắc 'Đặc quyền tối thiểu' (Principle of Least Privilege) trong quản trị CSDL quy định:",
    "options": [
      "Chỉ cấp cho mỗi người dùng đúng những quyền hạn tối thiểu cần thiết để hoàn thành công việc của họ, không cấp thừa quyền",
      "Tất cả mọi người đều được cấp quyền quản trị tối cao",
      "Không cấp bất kỳ quyền nào cho bất kỳ ai",
      "Chỉ người già nhất mới được cấp quyền sử dụng"
    ],
    "answer": 0,
    "explain": "Hạn chế quyền hạn dư thừa giúp giảm thiểu tối đa thiệt hại nếu chẳng may một tài khoản cá nhân bị kẻ xấu chiếm đoạt."
  },
  {
    "id": "b15-20",
    "q": "Một hệ quản trị CSDL hỗ trợ cơ chế 'Kiểm soát truy cập theo vai trò' (Role-Based Access Control - RBAC) giúp người quản trị:",
    "options": [
      "Gán quyền cho các Vai trò (Role như Giáo viên, Học sinh, Kế toán), sau đó chỉ cần gán người dùng vào vai trò tương ứng để quản lý tập trung",
      "Phân loại người dùng theo chiều cao và cân nặng",
      "Tự động nâng lương cho người dùng",
      "Bắt buộc người dùng phải học thuộc các bài thơ cổ"
    ],
    "answer": 0,
    "explain": "RBAC đơn giản hóa việc quản trị: khi có giáo viên mới về trường, chỉ cần gán vào nhóm 'GiaoVien' là tự động có đủ các quyền quy định."
  },
  {
    "id": "b15-21",
    "q": "Khi một nhân viên công nghệ thông tin nghỉ việc tại công ty, thao tác bảo mật ĐẦU TIÊN mà DBA cần thực hiện là gì?",
    "options": [
      "Vô hiệu hóa (Disable) hoặc xóa tài khoản đăng nhập CSDL của nhân viên đó và thu hồi toàn bộ quyền truy cập",
      "Xóa sạch toàn bộ CSDL của công ty",
      "Mua máy chủ mới thay thế",
      "Tắt kết nối Internet của toàn công ty trong một tuần"
    ],
    "answer": 0,
    "explain": "Khóa tài khoản nhân viên nghỉ việc ngay lập tức để ngăn ngừa nguy cơ bị trả thù hoặc đánh cắp dữ liệu sau khi rời tổ chức."
  },
  {
    "id": "b15-22",
    "q": "Tính năng 'Ẩn danh hóa dữ liệu' (Data Masking) trong CSDL thường được dùng khi nào?",
    "options": [
      "Khi trích xuất dữ liệu cho đội ngũ lập trình viên kiểm thử phần mềm mà vẫn che giấu thông tin thật của khách hàng (như thay số thẻ bằng dấu *)",
      "Khi in thiệp chúc mừng sinh nhật",
      "Khi muốn xóa vĩnh viễn dữ liệu khỏi máy chủ",
      "Khi máy tính bị mất kết nối mạng"
    ],
    "answer": 0,
    "explain": "Data Masking xáo trộn hoặc che dấu dữ liệu nhạy cảm (như 4 số cuối thẻ tín dụng **** 1234) trong môi trường thử nghiệm."
  },
  {
    "id": "b15-23",
    "q": "Theo quy định pháp luật về bảo vệ dữ liệu cá nhân tại Việt Nam, hành vi nào sau đây bị xử lý nghiêm minh?",
    "options": [
      "Tự ý trích xuất, mua bán, phát tán thông tin dữ liệu cá nhân của người khác từ cơ sở dữ liệu khi chưa được phép",
      "Sao lưu dữ liệu định kỳ theo đúng quy trình",
      "Cài đặt phần mềm diệt virus chính hãng cho máy chủ",
      "Đặt mật khẩu bảo vệ CSDL dài 16 ký tự"
    ],
    "answer": 0,
    "explain": "Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân nghiêm cấm mọi hành vi mua bán, chiếm đoạt và chia sẻ trái phép dữ liệu cá nhân."
  },
  {
    "id": "b15-24",
    "q": "Cơ chế 'Khôi phục điểm thời gian' (Point-in-Time Recovery) cho phép người quản trị CSDL làm gì?",
    "options": [
      "Khôi phục trạng thái CSDL về chính xác một thời điểm cụ thể trong quá khứ (ví dụ lúc 10h15 sáng nay trước khi xảy ra sự cố xóa nhầm)",
      "Quay ngược thời gian đồng hồ đeo tay của người quản trị",
      "Tự động kéo dài tuổi thọ của bóng bán dẫn máy tính",
      "Làm cho máy tính trẻ lại như lúc mới mua"
    ],
    "answer": 0,
    "explain": "Kết hợp tệp Full backup và tệp Transaction Log giúp phục hồi dữ liệu chuẩn xác về đúng giây phút trước khi thảm họa xảy ra."
  }
];
