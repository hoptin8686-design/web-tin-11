import { Question } from "@/lib/types";

// Bài 16: Nghề quản trị cơ sở dữ liệu
export const questions: Question[] = [
  {
    "id": "b16-01",
    "q": "Người quản trị cơ sở dữ liệu (DBA - Database Administrator) là người chịu trách nhiệm chính về:",
    "options": [
      "Cài đặt, cấu hình, đảm bảo tính an toàn, bảo mật, hiệu năng và tính liên tục của hệ thống CSDL",
      "Viết kịch bản và diễn xuất trong các bộ phim hoạt hình",
      "Bán các thiết bị linh kiện máy tính tại cửa hàng",
      "Lắp đặt hệ thống điều hòa nhiệt độ cho phòng họp"
    ],
    "answer": 0,
    "explain": "DBA chịu trách nhiệm cao nhất về kỹ thuật vận hành, bảo mật và tính sẵn sàng của hệ thống cơ sở dữ liệu."
  },
  {
    "id": "b16-02",
    "q": "Công việc thường ngày nào sau đây là nhiệm vụ trọng tâm của một người làm nghề quản trị CSDL?",
    "options": [
      "Giám sát hiệu năng hệ thống, kiểm tra các bản sao lưu tự động và phân quyền tài khoản người dùng",
      "Sửa chữa bàn ghế bị gãy trong phòng làm việc",
      "Vẽ tranh minh họa quảng cáo trên mạng xã hội",
      "Tự động tắt máy chủ để về sớm"
    ],
    "answer": 0,
    "explain": "DBA theo dõi tải CPU/RAM của máy chủ CSDL, kiểm tra tệp backup và điều chỉnh phân quyền."
  },
  {
    "id": "b16-03",
    "q": "Kỹ năng chuyên môn nào sau đây là BẮT BUỘC đối với một người quản trị cơ sở dữ liệu chuyên nghiệp?",
    "options": [
      "Nắm vững cú pháp ngôn ngữ SQL, kiến trúc hệ quản trị CSDL (như MySQL, Oracle, SQL Server) và các giải pháp sao lưu phục hồi",
      "Khả năng hát và nhảy múa chuyên nghiệp",
      "Kỹ năng lái xe ô tô tải hạng nặng",
      "Kỹ năng may vá quần áo thời trang"
    ],
    "answer": 0,
    "explain": "Hiểu biết sâu sắc về SQL, tối ưu hóa truy vấn và kiến trúc DBMS là nền tảng cốt lõi của nghề DBA."
  },
  {
    "id": "b16-04",
    "q": "Phẩm chất đạo đức nghề nghiệp nào là cực kỳ quan trọng đối với một DBA do đặc thù công việc nắm giữ toàn bộ dữ liệu của tổ chức?",
    "options": [
      "Tính trung thực, cẩn trọng, kỷ luật cao và tôn trọng tuyệt đối tính bảo mật thông tin",
      "Thích khoe khoang dữ liệu khách hàng lên mạng xã hội",
      "Tùy tiện chia sẻ mật khẩu máy chủ cho bạn bè xem",
      "Sẵn sàng bán dữ liệu nội bộ để kiếm thêm thu nhập"
    ],
    "answer": 0,
    "explain": "DBA có quyền truy cập dữ liệu tối cao nên bắt buộc phải có đạo đức nghề nghiệp liêm chính và tuân thủ pháp luật bảo vệ dữ liệu."
  },
  {
    "id": "b16-05",
    "q": "Khi hệ thống cơ sở dữ liệu bị quá tải (chạy rất chậm trong giờ cao điểm), công việc của DBA là:",
    "options": [
      "Phân tích tệp nhật ký, tìm các câu lệnh truy vấn chạy chậm (Slow Queries) để tối ưu hóa chỉ mục (Index) và điều chỉnh cấu hình bộ nhớ đệm",
      "Tắt máy tính và bỏ về nhà",
      "Xóa bớt một nửa số tài khoản của khách hàng",
      "Đổ nước đá vào máy chủ để hạ nhiệt"
    ],
    "answer": 0,
    "explain": "Tối ưu hóa hiệu năng (Performance Tuning) bằng cách đánh chỉ mục index phù hợp là nghiệp vụ chuyên sâu của DBA."
  },
  {
    "id": "b16-06",
    "q": "Vị trí việc làm nào sau đây cùng thuộc lĩnh vực công nghệ dữ liệu nhưng tập trung vào việc thu thập, xử lý và trực quan hóa dữ liệu kinh doanh?",
    "options": [
      "Chuyên viên phân tích dữ liệu (Data Analyst)",
      "Nhân viên bảo vệ tòa nhà",
      "Đầu bếp trưởng nhà hàng",
      "Tài xế xe buýt"
    ],
    "answer": 0,
    "explain": "Data Analyst sử dụng CSDL để phân tích xu hướng kinh doanh và lập báo cáo hỗ trợ lãnh đạo ra quyết định."
  },
  {
    "id": "b16-07",
    "q": "Một kỹ sư dữ liệu (Data Engineer) có vai trò chính là gì?",
    "options": [
      "Xây dựng các đường ống dẫn dữ liệu (Data Pipeline) quy mô lớn để tự động thu thập, làm sạch và nạp dữ liệu cho các mô hình AI và phân tích",
      "Chuyên thiết kế vỏ máy tính bằng nhựa tái chế",
      "Quản lý việc mua bán văn phòng phẩm trong trường học",
      "Kiểm tra chất lượng nguồn nước sinh hoạt"
    ],
    "answer": 0,
    "explain": "Data Engineer thiết kế hạ tầng luân chuyển dữ liệu lớn (Big Data Infrastructure) cho doanh nghiệp."
  },
  {
    "id": "b16-08",
    "q": "Tại sao các ngân hàng và bệnh viện lớn luôn sẵn sàng chi trả mức lương rất cao cho các chuyên gia quản trị CSDL giỏi?",
    "options": [
      "Vì sự gián đoạn hay mất mát dữ liệu tài chính hoặc hồ sơ bệnh án có thể gây thiệt hại hàng triệu đô-la và nguy hiểm tới tính mạng con người",
      "Vì người làm DBA có thể thay thế toàn bộ các bác sĩ phẫu thuật",
      "Vì pháp luật bắt buộc các ngân hàng phải trả lương cao",
      "Vì DBA có thể tự in ra tiền giấy"
    ],
    "answer": 0,
    "explain": "Dữ liệu là tài sản vô giá của tổ chức; DBA bảo vệ tài sản sống còn này hoạt động 24/7 không ngừng nghỉ."
  },
  {
    "id": "b16-09",
    "q": "Chứng chỉ nghề nghiệp quốc tế nào sau đây có giá trị khẳng định năng lực chuyên môn của một DBA?",
    "options": [
      "Oracle Certified Professional (OCP) hoặc Microsoft Certified: Azure Database Administrator Associate",
      "Bằng lái xe máy hạng A1",
      "Chứng chỉ bơi lội cự ly ngắn",
      "Giấy khen học sinh giỏi môn Thể dục"
    ],
    "answer": 0,
    "explain": "Các chứng chỉ của Oracle, Microsoft, AWS khẳng định kỹ năng quản trị CSDL chuẩn quốc tế."
  },
  {
    "id": "b16-10",
    "q": "Xu hướng chuyển dịch của nghề quản trị CSDL trong thời đại Điện toán đám mây là gì?",
    "options": [
      "Chuyển từ quản trị máy chủ vật lý cục bộ sang quản trị các dịch vụ CSDL trên đám mây (Cloud Database Administrator như Amazon RDS, Azure SQL)",
      "Nghề DBA sẽ bị biến mất hoàn toàn và con người không cần dùng CSDL nữa",
      "DBA sẽ quay về sử dụng sổ tay giấy để ghi chép",
      "DBA chỉ cần dùng điện thoại bàn để làm việc"
    ],
    "answer": 0,
    "explain": "Điện toán đám mây đòi hỏi DBA nắm vững kỹ năng quản trị CSDL phân tán, tự động hóa mở rộng quy mô trên đám mây."
  },
  {
    "id": "b16-11",
    "q": "Khi doanh nghiệp bị tấn công mã độc tống tiền (Ransomware), trách nhiệm lớn nhất của DBA là:",
    "options": [
      "Kích hoạt quy trình ứng phó thảm họa, cô lập hệ thống và phục hồi toàn bộ CSDL về trạng thái an toàn gần nhất từ bản sao lưu độc lập",
      "Chuyển tiền cá nhân cho tin tặc để chuộc dữ liệu",
      "Đăng bài viết cầu cứu trên mạng xã hội",
      "Tự ý xóa sạch toàn bộ hệ thống để phi tang dấu vết"
    ],
    "answer": 0,
    "explain": "Năng lực phục hồi dữ liệu nhanh chóng và an toàn là thước đo bản lĩnh và trình độ của người làm DBA."
  },
  {
    "id": "b16-12",
    "q": "Một học sinh muốn theo đuổi nghề Quản trị cơ sở dữ liệu trong tương lai NÊN chuẩn bị những kiến thức nền tảng nào từ bậc THPT?",
    "options": [
      "Học tốt môn Tin học (đặc biệt là CSDL quan hệ, tư duy logic thuật toán, SQL), môn Toán và tiếng Anh chuyên ngành",
      "Chỉ cần chơi trò chơi điện tử giỏi",
      "Không cần học gì vì máy tính tự làm hết",
      "Học thuộc lòng các bài hát trên tivi"
    ],
    "answer": 0,
    "explain": "Kiến thức CSDL, tư duy toán học logic và tiếng Anh là ba chân kiềng giúp học sinh học tốt ngành CNTT và dữ liệu."
  },
  {
    "id": "b16-13",
    "q": "Thao tác 'Di chuyển dữ liệu' (Data Migration) của DBA là gì?",
    "options": [
      "Chuyển dữ liệu an toàn từ một hệ thống cũ (hoặc máy chủ cũ) sang một hệ thống máy chủ CSDL mới hiện đại hơn",
      "Xách ổ cứng máy tính đi bộ sang phòng khác",
      "Gửi tệp dữ liệu qua tin nhắn Zalo",
      "Tải phim về máy tính cá nhân"
    ],
    "answer": 0,
    "explain": "Di chuyển dữ liệu là dự án kỹ thuật phức tạp chuyển đổi dữ liệu mà không làm gián đoạn hoạt động kinh doanh."
  },
  {
    "id": "b16-14",
    "q": "Hoạt động 'Giám sát dung lượng CSDL' giúp DBA chủ động điều gì?",
    "options": [
      "Dự báo trước tốc độ tăng trưởng dữ liệu để kịp thời mở rộng ổ cứng trước khi ổ đĩa bị đầy làm sập hệ thống",
      "Xóa bớt ảnh đại diện của người dùng",
      "Tự động tăng giá vé dịch vụ của công ty",
      "Biết được người dùng đang xem phim gì"
    ],
    "answer": 0,
    "explain": "Theo dõi dung lượng lưu trữ (Capacity Planning) ngăn chặn thảm họa máy chủ bị treo vì cạn kiệt dung lượng đĩa."
  },
  {
    "id": "b16-15",
    "q": "Hành vi nào sau đây của DBA bị coi là vi phạm pháp luật nghiêm trọng?",
    "options": [
      "Lợi dụng quyền quản trị tối cao để lén trích xuất dữ liệu khách hàng đem bán cho các công ty quảng cáo",
      "Chạy thử nghiệm câu lệnh truy vấn trên môi trường kiểm thử",
      "Thay đổi mật khẩu tài khoản quản trị định kỳ 3 tháng một lần",
      "Tham gia các hội thảo khoa học về bảo mật dữ liệu"
    ],
    "answer": 0,
    "explain": "Đánh cắp, mua bán thông tin khách hàng từ CSDL là tội phạm hình sự xâm phạm an ninh mạng."
  },
  {
    "id": "b16-16",
    "q": "Khái niệm 'Kế hoạch kinh doanh liên tục' (Business Continuity Plan) mà DBA tham gia xây dựng nhằm mục đích:",
    "options": [
      "Đảm bảo các dịch vụ công nghệ thông tin quan trọng của tổ chức vẫn duy trì hoạt động bình thường ngay cả khi xảy ra thảm họa thiên tai",
      "Đảm bảo công ty bán được nhiều hàng hóa hơn đối thủ",
      "Không cho nhân viên nghỉ phép",
      "Tăng thời gian làm việc lên 24 tiếng mỗi ngày"
    ],
    "answer": 0,
    "explain": "Duy trì hoạt động liên tục đảm bảo dữ liệu luôn sẵn sàng, giảm thiểu tối đa thời gian chết (downtime)."
  },
  {
    "id": "b16-17",
    "q": "Một DBA giỏi cần có khả năng 'Tư duy logic và giải quyết vấn đề' tốt để làm gì?",
    "options": [
      "Bình tĩnh chẩn đoán đúng nguyên nhân gốc rễ của các sự cố nghẽn mạng, xung đột khóa hoặc lỗi dữ liệu dưới áp lực thời gian",
      "Để tranh luận thắng bạn bè trong lớp",
      "Để viết các bài thơ văn dài",
      "Để giải nhanh các câu đố vui trên mạng"
    ],
    "answer": 0,
    "explain": "Khi hệ thống sụp đổ, áp lực thời gian tính bằng từng phút; khả năng tư duy giải quyết vấn đề giúp DBA xử lý chính xác."
  },
  {
    "id": "b16-18",
    "q": "Khái niệm 'Môi trường phát triển' (Development / Staging) và 'Môi trường thực tế' (Production) trong quản trị CSDL được phân biệt thế nào?",
    "options": [
      "Môi trường Development dùng để lập trình, thử nghiệm tính năng mới; còn Production là hệ thống thực đang phục vụ khách hàng trực tiếp",
      "Hai môi trường này giống hệt nhau và không cần tách biệt",
      "Development là máy tính xách tay, còn Production là điện thoại",
      "Development chỉ dùng vào ban đêm"
    ],
    "answer": 0,
    "explain": "Tách rời môi trường thử nghiệm và môi trường thực tế là nguyên tắc sống còn để tránh việc thử code làm hỏng dữ liệu thật."
  },
  {
    "id": "b16-19",
    "q": "Một DBA cần phối hợp chặt chẽ với đối tượng nào sau đây trong quá trình xây dựng phần mềm?",
    "options": [
      "Các kỹ sư lập trình phần mềm (Software Developers) và chuyên gia an ninh mạng (Security Specialists)",
      "Nhân viên bảo vệ bãi đỗ xe",
      "Người quét dọn đường phố",
      "Các bác sĩ thú y"
    ],
    "answer": 0,
    "explain": "DBA hỗ trợ lập trình viên tối ưu câu lệnh SQL và phối hợp chuyên gia bảo mật xây dựng chính sách phòng thủ dữ liệu."
  },
  {
    "id": "b16-20",
    "q": "Khái niệm 'Thời gian chết' (Downtime) của hệ thống CSDL được hiểu là:",
    "options": [
      "Khoảng thời gian hệ thống CSDL ngừng hoạt động, không thể tiếp nhận và xử lý yêu cầu của người dùng do sự cố hoặc bảo trì",
      "Thời gian nhân viên ngủ trưa tại văn phòng",
      "Thời gian máy tính tắt màn hình",
      "Thời gian từ lúc mua máy tính đến khi thanh lý"
    ],
    "answer": 0,
    "explain": "Downtime của các hệ thống lớn như ví điện tử hay sàn thương mại điện tử gây thiệt hại hàng tỷ đồng mỗi giờ."
  },
  {
    "id": "b16-21",
    "q": "Chỉ số 'Thời gian khôi phục mục tiêu' (RTO - Recovery Time Objective) cho biết:",
    "options": [
      "Khoảng thời gian tối đa cho phép để DBA khôi phục lại hệ thống CSDL hoạt động bình thường sau sự cố",
      "Thời gian tối đa để máy tính khởi động lại",
      "Thời gian học một khóa học về SQL",
      "Thời gian pin laptop dùng được"
    ],
    "answer": 0,
    "explain": "RTO đo lường tốc độ xử lý sự cố: ví dụ RTO = 15 phút nghĩa là hệ thống phải được cứu sống trong vòng 15 phút."
  },
  {
    "id": "b16-22",
    "q": "Công cụ 'Giám sát CSDL tự động' (Database Monitoring Tools) gửi thông báo cho DBA qua kênh nào khi phát hiện sự cố khẩn cấp lúc nửa đêm?",
    "options": [
      "Tin nhắn SMS khẩn cấp, cuộc gọi tự động hoặc email cảnh báo tới điện thoại của DBA trực ca",
      "Gửi thư tay qua đường bưu điện",
      "Cử người đi xe đạp đến tận nhà gõ cửa",
      "Phát loa thông báo trên đài phát thanh xã"
    ],
    "answer": 0,
    "explain": "Hệ thống giám sát tự động kích hoạt cảnh báo tức thời tới điện thoại để DBA phản ứng ngay lập tức."
  },
  {
    "id": "b16-23",
    "q": "Một DBA thực hiện công việc 'Kiểm toán dữ liệu' (Database Auditing) định kỳ nhằm mục đích:",
    "options": [
      "Rà soát việc tuân thủ các tiêu chuẩn bảo mật, kiểm tra các quyền truy cập bất thường và đảm bảo tính minh bạch dữ liệu",
      "Đếm số lượng bàn phím trong công ty",
      "Tính điểm trung bình môn học cho các học sinh",
      "Tìm kiếm các bài hát mới trên mạng"
    ],
    "answer": 0,
    "explain": "Kiểm toán CSDL đảm bảo doanh nghiệp tuân thủ các quy định pháp luật và không có lỗ hổng bảo mật nội bộ."
  },
  {
    "id": "b16-24",
    "q": "Cơ hội việc làm của nghề quản trị cơ sở dữ liệu hiện nay được đánh giá như thế nào?",
    "options": [
      "Cực kỳ rộng mở và có nhu cầu tuyển dụng liên tục trong mọi lĩnh vực (tài chính, y tế, giáo dục, thương mại điện tử, viễn thông)",
      "Rất ít người cần đến và sắp bị loại bỏ",
      "Chỉ có duy nhất một công ty trên thế giới tuyển dụng",
      "Không có bất kỳ cơ hội phát triển nghề nghiệp nào"
    ],
    "answer": 0,
    "explain": "Dữ liệu được coi là 'dầu mỏ mới' của thế kỷ 21; mọi tổ chức chuyển đổi số đều bắt buộc phải có đội ngũ chuyên gia dữ liệu."
  }
];
