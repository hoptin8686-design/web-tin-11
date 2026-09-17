import { Question } from "@/lib/types";

// Bài 12: Hệ quản trị cơ sở dữ liệu và hệ cơ sở dữ liệu
export const questions: Question[] = [
  {
    "id": "b12-01",
    "q": "Hệ quản trị cơ sở dữ liệu (DBMS - Database Management System) là gì?",
    "options": [
      "Phần mềm cung cấp môi trường để tạo lập, lưu trữ, cập nhật và khai thác dữ liệu của cơ sở dữ liệu",
      "Phần cứng bo mạch chủ của máy chủ mạng",
      "Hệ điều hành chuyên dùng cho điện thoại thông minh",
      "Tập hợp các dây cáp mạng kết nối máy tính"
    ],
    "answer": 0,
    "explain": "DBMS là phần mềm hệ thống đứng giữa người dùng/ứng dụng và CSDL vật lý, cung cấp các công cụ quản trị dữ liệu toàn diện."
  },
  {
    "id": "b12-02",
    "q": "Phần mềm nào sau đây là ví dụ về một Hệ quản trị cơ sở dữ liệu (DBMS)?",
    "options": [
      "MySQL, Microsoft SQL Server, Oracle, PostgreSQL",
      "Microsoft Word, Microsoft Excel, Microsoft PowerPoint",
      "Google Chrome, Mozilla Firefox, Microsoft Edge",
      "Windows Media Player, VLC, KMPlayer"
    ],
    "answer": 0,
    "explain": "MySQL, SQL Server, Oracle, PostgreSQL, Access là các hệ quản trị CSDL quan hệ hàng đầu thế giới."
  },
  {
    "id": "b12-03",
    "q": "Một 'Hệ cơ sở dữ liệu' (Database System) bao gồm những thành phần cơ bản nào?",
    "options": [
      "Cơ sở dữ liệu (CSDL), Hệ quản trị CSDL (DBMS), Phần mềm ứng dụng, Con người và Phần cứng",
      "Chỉ gồm một màn hình máy tính và chuột bàn phím",
      "Chỉ gồm dây điện và bộ nguồn máy tính",
      "Chỉ gồm các cuốn sách in trên giấy"
    ],
    "answer": 0,
    "explain": "Hệ CSDL là một hệ thống tổng thể kết hợp giữa phần cứng, dữ liệu (CSDL), phần mềm quản trị (DBMS), ứng dụng giao tiếp và người dùng."
  },
  {
    "id": "b12-04",
    "q": "Chức năng 'Định nghĩa dữ liệu' của hệ quản trị cơ sở dữ liệu cho phép người dùng:",
    "options": [
      "Khai báo cấu trúc các bảng, đặt tên trường, chọn kiểu dữ liệu và thiết lập các ràng buộc toàn vẹn",
      "Tính toán lương tháng cho công nhân tự động",
      "Chơi các trò chơi điện tử trực tuyến",
      "In tranh vẽ hoạt hình ra máy in màu"
    ],
    "answer": 0,
    "explain": "Ngôn ngữ định nghĩa dữ liệu (DDL) giúp định hình lược đồ CSDL: tạo bảng, sửa cấu trúc, định kiểu và khóa."
  },
  {
    "id": "b12-05",
    "q": "Chức năng 'Cập nhật và thao tác dữ liệu' của DBMS bao gồm những khả năng nào?",
    "options": [
      "Thêm mới (Insert), Chỉnh sửa (Update), Xóa bỏ (Delete) và Truy vấn tìm kiếm (Select) dữ liệu",
      "Cài đặt hệ điều hành Windows mới vào ổ đĩa",
      "Sửa chữa phần cứng vi mạch CPU khi bị gãy chân",
      "Quét sạch bụi bẩn bên trong thùng máy tính"
    ],
    "answer": 0,
    "explain": "Ngôn ngữ thao tác dữ liệu (DML) cung cấp các câu lệnh để thêm, xóa, sửa và truy xuất thông tin từ các bảng."
  },
  {
    "id": "b12-06",
    "q": "Chức năng nào của DBMS giúp bảo vệ dữ liệu khi máy tính bất ngờ bị mất điện đột ngột trong lúc đang ghi dữ liệu?",
    "options": [
      "Cơ chế kiểm soát giao dịch, sao lưu và phục hồi dữ liệu sau sự cố (Backup & Recovery)",
      "Chức năng đổi màu sắc giao diện phần mềm",
      "Chức năng phát âm thanh cảnh báo còi hú",
      "Chức năng tự động xóa toàn bộ CSDL"
    ],
    "answer": 0,
    "explain": "DBMS sử dụng tệp nhật ký (Log file) để hoàn tác (Rollback) các giao dịch dở dang hoặc ghi bù dữ liệu đảm bảo CSDL không bị hỏng."
  },
  {
    "id": "b12-07",
    "q": "Theo kiến trúc 3 mức chuẩn của Hệ cơ sở dữ liệu (ANSI/SPARC), mức nào thể hiện 'cách thức dữ liệu được lưu trữ thực tế trên các cung từ ổ đĩa'?",
    "options": [
      "Mức trong (Internal Level / Physical Level)",
      "Mức quan niệm (Conceptual Level / Logical Level)",
      "Mức ngoài (External Level / View Level)",
      "Mức người dùng"
    ],
    "answer": 0,
    "explain": "Mức trong (mức vật lý) mô tả cấu trúc lưu trữ dữ liệu vật lý ở cấp độ thấp: định dạng bản ghi, đường dẫn tệp, khối nhớ, chỉ mục trên đĩa."
  },
  {
    "id": "b12-08",
    "q": "Trong kiến trúc 3 mức của hệ CSDL, 'Mức quan niệm' (Conceptual Level / Mức logic) có nhiệm vụ:",
    "options": [
      "Mô tả toàn bộ cấu trúc dữ liệu của CSDL (toàn bộ các bảng, các trường và mối quan hệ liên kết giữa chúng) theo góc nhìn logic của người thiết kế",
      "Chỉ hiển thị giao diện xem điểm riêng của từng học sinh",
      "Mô tả cách thức dòng điện chạy trong chip nhớ bán dẫn",
      "Hiển thị bảng mã màu cho họa sĩ thiết kế"
    ],
    "answer": 0,
    "explain": "Mức quan niệm là cái nhìn toàn thể trừu tượng về toàn bộ thế giới thực được mô hình hóa trong CSDL, độc lập với thiết bị lưu trữ vật lý."
  },
  {
    "id": "b12-09",
    "q": "'Mức ngoài' (External Level / Khung nhìn - View) trong kiến trúc hệ CSDL là gì?",
    "options": [
      "Khung nhìn dữ liệu riêng biệt phù hợp với từng đối tượng người dùng cụ thể (chỉ hiển thị phần dữ liệu mà người đó được phép xem)",
      "Cái nhìn từ ngoài cửa sổ vào phòng máy chủ",
      "Vỏ kim loại bảo vệ bên ngoài của thùng máy tính",
      "Màn hình hiển thị logo của nhà sản xuất máy tính"
    ],
    "answer": 0,
    "explain": "Mức ngoài là các khung nhìn (View) riêng cho từng nhóm người: học sinh chỉ xem được điểm của mình, thủ thư chỉ thấy sách, kế toán chỉ thấy học phí."
  },
  {
    "id": "b12-10",
    "q": "Người quản trị cơ sở dữ liệu (DBA - Database Administrator) là người có vai trò gì?",
    "options": [
      "Người chịu trách nhiệm cao nhất về quản lý, vận hành, bảo mật, tối ưu hiệu năng và sao lưu phục hồi toàn bộ hệ thống CSDL",
      "Người chuyên đi lau chùi vệ sinh các máy tính trong trường học",
      "Học sinh ngồi học môn Tin học tại phòng thực hành",
      "Người giao hàng đưa thiết bị máy tính đến trường"
    ],
    "answer": 0,
    "explain": "DBA là chuyên gia kỹ thuật cấp cao kiểm soát toàn quyền hệ thống dữ liệu, cấp phát tài khoản, giám sát an ninh và xử lý thảm họa."
  },
  {
    "id": "b12-11",
    "q": "Người lập trình ứng dụng (Application Programmer) tương tác với cơ sở dữ liệu thông qua:",
    "options": [
      "Các ngôn ngữ lập trình (Java, Python, C#, PHP...) kết hợp với câu lệnh truy vấn SQL để xây dựng giao diện và xử lý nghiệp vụ cho người dùng",
      "Việc hàn các vi mạch điện tử trên bo mạch chủ",
      "Gõ phím bằng một ngón tay",
      "Tắt mở công tắc nguồn điện liên tục"
    ],
    "answer": 0,
    "explain": "Lập trình viên viết phần mềm giao tiếp với DBMS qua API hoặc SQL để người dùng cuối không phải gõ các câu lệnh dữ liệu phức tạp."
  },
  {
    "id": "b12-12",
    "q": "Người dùng cuối (End-user) trong hệ cơ sở dữ liệu là ai?",
    "options": [
      "Những người trực tiếp khai thác thông tin từ CSDL thông qua giao diện phần mềm ứng dụng tiện lợi (như thu ngân, nhân viên văn phòng, học sinh)",
      "Người chế tạo ra các bóng bán dẫn vi mạch",
      "Người vận chuyển máy tính từ nhà máy",
      "Người lắp ráp bàn ghế cho phòng tin học"
    ],
    "answer": 0,
    "explain": "Người dùng cuối không cần hiểu biết sâu về kỹ thuật CSDL, họ chỉ thao tác với các biểu mẫu giao diện (form) và báo cáo trực quan."
  },
  {
    "id": "b12-13",
    "q": "Cơ chế 'Khung nhìn' (View) trong DBMS mang lại lợi ích bảo mật gì?",
    "options": [
      "Ẩn giấu các cột dữ liệu nhạy cảm (như mật khẩu, mức lương, số CMND) đối với những người dùng không có thẩm quyền truy cập",
      "Làm mờ màn hình máy tính khi có người đi ngang qua",
      "Tự động khóa cửa phòng máy chủ khi trời tối",
      "Tắt loa máy tính để không phát ra tiếng động"
    ],
    "answer": 0,
    "explain": "View tạo ra một bảng ảo che giấu các trường bảo mật, chỉ xuất các thông tin cần thiết cho nhóm người dùng được phép."
  },
  {
    "id": "b12-14",
    "q": "Khi nhiều người dùng cùng truy cập và chỉnh sửa một cơ sở dữ liệu cùng lúc, DBMS sử dụng cơ chế nào để đảm bảo dữ liệu không bị xung đột?",
    "options": [
      "Kiểm soát truy cập đồng thời (Concurrency Control)",
      "Tự động ngắt kết nối mạng của tất cả mọi người",
      "Xóa sạch bản ghi đang được sửa",
      "Tắt nguồn máy chủ ngay lập tức"
    ],
    "answer": 0,
    "explain": "DBMS dùng các thuật toán khóa (Locking) và cô lập giao dịch để điều phối luồng truy cập đồng thời trơn tru."
  },
  {
    "id": "b12-15",
    "q": "Ngôn ngữ truy vấn chuẩn quốc tế được hầu hết các hệ quản trị CSDL quan hệ hiện nay hỗ trợ là:",
    "options": [
      "SQL (Structured Query Language)",
      "HTML (HyperText Markup Language)",
      "CSS (Cascading Style Sheets)",
      "Pascal"
    ],
    "answer": 0,
    "explain": "SQL là ngôn ngữ chuẩn hóa toàn cầu dùng để định nghĩa, thao tác và điều khiển dữ liệu trong các RDBMS."
  },
  {
    "id": "b12-16",
    "q": "Nhật ký hệ thống (Log file) trong một hệ quản trị CSDL dùng để:",
    "options": [
      "Ghi lại tuần tự theo thời gian mọi thao tác cập nhật dữ liệu và các giao dịch để phục vụ khôi phục khi có sự cố",
      "Lưu trữ các bài hát ưa thích của người quản trị",
      "Tự động vẽ đồ thị phân tích giá cổ phiếu",
      "Gửi thông báo thời tiết cho người dùng"
    ],
    "answer": 0,
    "explain": "Tệp Log là cơ sở để thực hiện REDO (ghi lại giao dịch đã xác nhận) hoặc UNDO (hoàn tác giao dịch chưa hoàn thành) khi hệ thống khởi động lại sau sự cố."
  },
  {
    "id": "b12-17",
    "q": "Quy trình nào sau đây là thao tác của người quản trị CSDL (DBA) nhằm đảm bảo an toàn dữ liệu trước nguy cơ hỏng phần cứng?",
    "options": [
      "Lập lịch sao lưu dự phòng định kỳ (Periodic Backup) ra thiết bị lưu trữ ngoài hoặc đám mây độc lập",
      "Xóa bớt một nửa số lượng bảng dữ liệu trong CSDL",
      "Cấm tất cả giáo viên không được nhập điểm vào phần mềm",
      "Tắt máy chủ vào ban đêm"
    ],
    "answer": 0,
    "explain": "Sao lưu dữ liệu định kỳ (Full backup, Incremental backup) là nhiệm vụ sống còn số một của mọi DBA."
  },
  {
    "id": "b12-18",
    "q": "Hệ quản trị CSDL Microsoft Access thường phù hợp với quy mô ứng dụng nào?",
    "options": [
      "Các ứng dụng quy mô nhỏ, cá nhân, học tập hoặc doanh nghiệp gia đình với lượng dữ liệu và người dùng ít",
      "Hệ thống ngân hàng thanh toán quốc tế toàn cầu",
      "Hệ thống đặt vé máy bay hàng triệu khách hàng đồng thời",
      "Mạng xã hội lớn có hàng tỷ người sử dụng như Facebook"
    ],
    "answer": 0,
    "explain": "MS Access là hệ quản trị CSDL để bàn (Desktop DBMS), dễ dùng cho học tập và văn phòng nhỏ, giới hạn dung lượng tệp 2GB."
  },
  {
    "id": "b12-19",
    "q": "Hệ quản trị CSDL nào sau đây thường được sử dụng cho các hệ thống lớn cấp doanh nghiệp, có khả năng xử lý hàng triệu giao dịch mỗi giây?",
    "options": [
      "Oracle Database hoặc Microsoft SQL Server Enterprise",
      "Phần mềm ghi chú Notepad",
      "Phần mềm vẽ tranh Microsoft Paint",
      "Trình phát nhạc Windows Media Player"
    ],
    "answer": 0,
    "explain": "Oracle và MS SQL Server Enterprise là những RDBMS khổng lồ, hỗ trợ cụm máy chủ (Clustering) và chịu lỗi cao cấp ngân hàng."
  },
  {
    "id": "b12-20",
    "q": "Từ điển dữ liệu (Data Dictionary / System Catalog) trong DBMS chứa thông tin gì?",
    "options": [
      "Siêu dữ liệu (Metadata) mô tả cấu trúc của các bảng, các kiểu dữ liệu, các ràng buộc và quyền hạn người dùng",
      "Nội dung của cuốn từ điển tiếng Anh - tiếng Việt",
      "Bản dịch các câu chuyện cổ tích dân gian",
      "Danh sách các bộ phim chiếu rạp mới nhất"
    ],
    "answer": 0,
    "explain": "Từ điển dữ liệu chứa 'dữ liệu về dữ liệu' (Metadata), là bản đồ nội bộ giúp DBMS biết bảng nào có những cột gì và liên kết với bảng nào."
  },
  {
    "id": "b12-21",
    "q": "Lệnh cấp quyền truy cập dữ liệu cho một người dùng trong hệ quản trị CSDL thuộc nhóm chức năng nào?",
    "options": [
      "Chức năng kiểm soát và điều khiển dữ liệu (Data Control)",
      "Chức năng thiết kế đồ họa",
      "Chức năng nén âm thanh kỹ thuật số",
      "Chức năng soạn thảo văn bản"
    ],
    "answer": 0,
    "explain": "Nhóm ngôn ngữ điều khiển dữ liệu DCL (với lệnh GRANT và REVOKE) phụ trách quản trị phân quyền bảo mật."
  },
  {
    "id": "b12-22",
    "q": "Mô hình kiến trúc Client - Server (Khách - Chủ) của một hệ CSDL hiện đại hoạt động như thế nào?",
    "options": [
      "CSDL và DBMS được cài đặt trên một máy chủ (Server) mạnh mẽ, các máy trạm người dùng (Clients) gửi yêu cầu truy vấn qua mạng để lấy kết quả",
      "Tất cả dữ liệu được lưu trên từng máy tính cá nhân riêng biệt không kết nối với nhau",
      "Máy tính người dùng tự động tắt nguồn khi máy chủ hoạt động",
      "Chỉ có một người duy nhất được phép dùng máy tính"
    ],
    "answer": 0,
    "explain": "Mô hình Client-Server tập trung hóa dữ liệu và tính toán trên Server, máy khách gửi câu hỏi SQL và nhận lại bảng kết quả qua mạng."
  },
  {
    "id": "b12-23",
    "q": "Một hệ CSDL có độ sẵn sàng cao (High Availability) là hệ thống có khả năng:",
    "options": [
      "Duy trì hoạt động liên tục 24/7, tự động chuyển sang máy chủ dự phòng khi máy chủ chính gặp sự cố mà không làm gián đoạn dịch vụ",
      "Chỉ mở cửa phục vụ 2 tiếng mỗi ngày",
      "Tự động xóa dữ liệu khi có sự cố kỹ thuật",
      "Bắt buộc người dùng phải đến tận nơi để xin phép đăng nhập"
    ],
    "answer": 0,
    "explain": "Độ sẵn sàng cao đảm bảo các dịch vụ quan trọng (như bệnh viện, ngân hàng, hàng không) luôn vận hành liên tục không gián đoạn."
  },
  {
    "id": "b12-24",
    "q": "Tại sao một lập trình viên phần mềm KHÔNG NÊN tự lập trình thao tác đọc ghi tệp thô trực tiếp trên đĩa mà nên sử dụng một DBMS?",
    "options": [
      "Vì DBMS đã giải quyết tối ưu tất cả các vấn đề phức tạp về hiệu năng, bộ nhớ đệm, bảo mật, toàn vẹn và xử lý đồng thời",
      "Vì viết chương trình trên tệp thô quá nhanh và dễ dàng",
      "Vì luật pháp quốc tế cấm mở tệp văn bản",
      "Vì đĩa cứng sẽ bị hỏng nếu đọc tệp thô"
    ],
    "answer": 0,
    "explain": "Tận dụng DBMS giúp nhà phát triển tập trung vào logic nghiệp vụ của ứng dụng mà không phải 'phát minh lại bánh xe' về an toàn và quản trị dữ liệu."
  }
];
