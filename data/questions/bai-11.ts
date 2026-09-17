import { Question } from "@/lib/types";

// Bài 11: Cơ sở dữ liệu
export const questions: Question[] = [
  {
    "id": "b11-01",
    "q": "Cơ sở dữ liệu (Database) được định nghĩa là gì theo SGK Tin học 11?",
    "options": [
      "Tập hợp các dữ liệu có liên quan với nhau, được tổ chức lưu trữ có cấu trúc trên thiết bị nhớ máy tính nhằm đáp ứng nhu cầu khai thác của nhiều người dùng",
      "Một bảng tính Excel đơn giản lưu trên máy tính cá nhân không kết nối mạng",
      "Tập hợp các bức ảnh chụp bằng điện thoại thông minh",
      "Một bài viết văn bản dài được soạn thảo trên phần mềm Word"
    ],
    "answer": 0,
    "explain": "Định nghĩa chuẩn của CSDL: tập hợp dữ liệu có cấu trúc, lưu trên thiết bị nhớ, phục vụ nhu cầu khai thác đồng thời của nhiều ứng dụng và người dùng."
  },
  {
    "id": "b11-02",
    "q": "Đặc trưng nào của cơ sở dữ liệu thể hiện rằng dữ liệu không bị lặp lại một cách không cần thiết giữa các bảng?",
    "options": [
      "Tính không dư thừa dữ liệu (Minimal Redundancy)",
      "Tính độc lập dữ liệu (Data Independence)",
      "Tính toàn vẹn dữ liệu (Data Integrity)",
      "Tính ngẫu nhiên của dữ liệu"
    ],
    "answer": 0,
    "explain": "Tính không dư thừa giảm thiểu tối đa sự lặp lại dữ liệu, giúp tiết kiệm bộ nhớ và tránh nguy cơ mâu thuẫn thông tin khi cập nhật."
  },
  {
    "id": "b11-03",
    "q": "Đặc trưng nào của cơ sở dữ liệu đảm bảo rằng dữ liệu luôn chính xác, không mâu thuẫn nhau tại mọi thời điểm trong toàn bộ hệ thống?",
    "options": [
      "Tính nhất quán dữ liệu (Consistency)",
      "Tính đa dạng dữ liệu",
      "Tính phụ thuộc vào phần cứng",
      "Tính biến đổi tự do"
    ],
    "answer": 0,
    "explain": "Tính nhất quán đảm bảo sau mọi thao tác thêm, sửa, xóa thì dữ liệu ở các bảng liên quan vẫn khớp nhau và không mâu thuẫn."
  },
  {
    "id": "b11-04",
    "q": "Quy định 'Điểm kiểm tra của học sinh phải nằm trong khoảng từ 0.0 đến 10.0' là ví dụ minh họa cho đặc trưng nào của cơ sở dữ liệu?",
    "options": [
      "Tính toàn vẹn dữ liệu (Data Integrity)",
      "Tính bảo mật dữ liệu",
      "Tính độc lập vật lý",
      "Tính khả dụng dữ liệu"
    ],
    "answer": 0,
    "explain": "Tính toàn vẹn đặt ra các ràng buộc giá trị hợp lệ để ngăn ngừa việc nhập nhầm dữ liệu vô lý (như điểm âm hoặc điểm 100)."
  },
  {
    "id": "b11-05",
    "q": "Tính độc lập dữ liệu (Data Independence) trong cơ sở dữ liệu bao gồm hai cấp độ là:",
    "options": [
      "Độc lập vật lý và Độc lập logic",
      "Độc lập trong nước và Độc lập quốc tế",
      "Độc lập có dây và Độc lập không dây",
      "Độc lập phần cứng và Độc lập thời gian"
    ],
    "answer": 0,
    "explain": "Độc lập dữ liệu gồm: Độc lập vật lý (thay đổi vị trí lưu trữ đĩa cứng không ảnh hưởng mức logic) và Độc lập logic (thay đổi cấu trúc CSDL không làm hỏng ứng dụng)."
  },
  {
    "id": "b11-06",
    "q": "'Tính độc lập vật lý' của dữ liệu có ý nghĩa gì?",
    "options": [
      "Cách tổ chức lưu trữ dữ liệu thực tế trên ổ cứng thay đổi (đổi ổ đĩa, nâng cấp SSD) không làm ảnh hưởng đến cấu trúc logic và các chương trình ứng dụng",
      "Máy tính có thể tự chạy mà không cần cắm nguồn điện",
      "Dữ liệu có thể bay trong không khí mà không cần dây cáp",
      "Bàn phím máy tính không cần kết nối với thùng máy"
    ],
    "answer": 0,
    "explain": "Độc lập vật lý tách biệt tầng lưu trữ vật lý bên dưới khỏi các tầng phần mềm bên trên."
  },
  {
    "id": "b11-07",
    "q": "'Tính độc lập logic' của dữ liệu thể hiện ở việc:",
    "options": [
      "Khi thay đổi, mở rộng cấu trúc bảng (thêm trường mới) thì các chương trình ứng dụng cũ khai thác các trường khác vẫn hoạt động bình thường",
      "Toàn bộ chương trình ứng dụng phải viết lại từ đầu nếu thêm một cột mới",
      "Không ai có thể lập trình được trên cơ sở dữ liệu đó nữa",
      "Cơ sở dữ liệu tự động biến đổi thành một trò chơi điện tử"
    ],
    "answer": 0,
    "explain": "Độc lập logic cho phép người thiết kế bổ sung các bảng hoặc trường mới mà không làm gãy các ứng dụng đang chạy hiện có."
  },
  {
    "id": "b11-08",
    "q": "Đặc trưng 'Tính an toàn và bảo mật' của cơ sở dữ liệu nhằm bảo vệ hệ thống khỏi điều gì?",
    "options": [
      "Sự truy cập trái phép, sửa đổi dữ liệu bất hợp pháp và nguy cơ mất mát thông tin khi có sự cố kỹ thuật",
      "Hiện tượng thời tiết nắng nóng làm giảm độ sáng màn hình",
      "Tiếng ồn phát ra từ quạt tản nhiệt của máy tính",
      "Bụi bẩn bám trên vỏ ngoài bàn phím"
    ],
    "answer": 0,
    "explain": "An toàn bảo mật ngăn chặn kẻ xấu thâm nhập, phân quyền truy cập và đảm bảo khôi phục được dữ liệu khi hệ thống gặp lỗi."
  },
  {
    "id": "b11-09",
    "q": "Tại sao một cơ sở dữ liệu cần phục vụ cho 'Nhiều người dùng và nhiều mục đích khác nhau'?",
    "options": [
      "Để tối ưu hóa việc chia sẻ tài nguyên dữ liệu, tránh mỗi phòng ban tự tạo một tập dữ liệu riêng gây trùng lặp và phân tán",
      "Vì máy tính không thể phục vụ cho một người duy nhất",
      "Để làm cho dữ liệu bị rối loạn và khó quản lý hơn",
      "Vì luật pháp quốc tế bắt buộc như vậy"
    ],
    "answer": 0,
    "explain": "CSDL tập trung giúp các bộ phận (giáo vụ, tài vụ, y tế trường học) cùng khai thác chung một nguồn dữ liệu học sinh thống nhất."
  },
  {
    "id": "b11-10",
    "q": "Khái niệm 'Ràng buộc toàn vẹn' (Integrity Constraint) trong cơ sở dữ liệu có vai trò:",
    "options": [
      "Quy định các điều kiện hợp lệ mà dữ liệu bắt buộc phải thỏa mãn để phản ánh đúng quy luật thực tế",
      "Ngăn chặn người dùng mở màn hình máy tính",
      "Tự động tăng giá trị của các con số lên gấp đôi",
      "Làm cho cơ sở dữ liệu không thể xóa được bất kỳ tệp nào"
    ],
    "answer": 0,
    "explain": "Ràng buộc toàn vẹn (như khóa chính không rỗng, khóa ngoại phải tồn tại, miền giá trị) bảo vệ dữ liệu khỏi các sai sót logic."
  },
  {
    "id": "b11-11",
    "q": "Một ví dụ về sự 'Mất nhất quán dữ liệu' (Inconsistency) là:",
    "options": [
      "Trong cùng một trường, bảng Điểm ghi học sinh sinh ngày 10/10/2008 nhưng bảng Đoàn thanh niên lại ghi sinh ngày 20/12/2007",
      "Điểm của học sinh được sắp xếp theo thứ tự giảm dần",
      "Tên của tất cả học sinh đều được viết hoa chữ cái đầu",
      "Dữ liệu được sao lưu định kỳ vào lúc 12 giờ đêm"
    ],
    "answer": 0,
    "explain": "Thông tin về cùng một đối tượng nhưng hiển thị khác nhau ở các bảng khác nhau là biểu hiện rõ nhất của sự mất nhất quán."
  },
  {
    "id": "b11-12",
    "q": "Nguyên nhân chính dẫn đến hiện tượng mất nhất quán dữ liệu thường là:",
    "options": [
      "Dữ liệu bị dư thừa trùng lặp ở nhiều nơi và khi cập nhật chỉ sửa ở một chỗ mà quên sửa ở những chỗ còn lại",
      "Tốc độ đường truyền Internet quá cao",
      "Dung lượng ổ đĩa SSD quá lớn",
      "Máy tính có quá nhiều thanh RAM"
    ],
    "answer": 0,
    "explain": "Dư thừa dữ liệu (Data Redundancy) là gốc rễ dẫn đến mất nhất quán (Inconsistency) khi thực hiện cập nhật."
  },
  {
    "id": "b11-13",
    "q": "Khi một học sinh nhập giá trị ngày sinh là '31/02/2008', hệ thống cơ sở dữ liệu từ chối tiếp nhận vì vi phạm:",
    "options": [
      "Ràng buộc toàn vẹn về miền giá trị của kiểu dữ liệu Ngày tháng (tháng 2 không thể có ngày 31)",
      "Luật An ninh mạng quốc tế",
      "Bản quyền phần mềm thương mại",
      "Tính độc lập vật lý của ổ đĩa"
    ],
    "answer": 0,
    "explain": "Hệ thống kiểm tra tính hợp lệ của kiểu Date: ngày 31 tháng 2 là giá trị không tồn tại trong thực tế."
  },
  {
    "id": "b11-14",
    "q": "Trong cơ sở dữ liệu, thuật ngữ 'Cấu trúc dữ liệu' được hiểu là:",
    "options": [
      "Cách thức tổ chức, sắp xếp và mối quan hệ liên kết giữa các bảng, các trường và các bản ghi trong hệ thống",
      "Khung vỏ kim loại bảo vệ bên ngoài của ổ đĩa cứng",
      "Hình dạng của dây cáp nối bàn phím với máy tính",
      "Sơ đồ mạng điện của tòa nhà văn phòng"
    ],
    "answer": 0,
    "explain": "Cấu trúc dữ liệu (Schema) định hình mô hình logic của các thực thể, thuộc tính và mối quan hệ giữa chúng."
  },
  {
    "id": "b11-15",
    "q": "Đặc trưng 'Tính không dư thừa' mang lại lợi ích kinh tế nào cho tổ chức?",
    "options": [
      "Tiết kiệm dung lượng bộ nhớ lưu trữ và giảm bớt thời gian, công sức nhập liệu và cập nhật dữ liệu",
      "Được nhà nước tặng miễn phí 100 chiếc máy tính mới",
      "Không cần phải trả tiền điện hàng tháng",
      "Tự động tăng doanh thu bán hàng lên 500%"
    ],
    "answer": 0,
    "explain": "Không dư thừa giúp tối ưu hóa phần cứng lưu trữ và giảm chi phí nhân sự duy trì dữ liệu."
  },
  {
    "id": "b11-16",
    "q": "Khái niệm 'Giao dịch' (Transaction) trong cơ sở dữ liệu thể hiện một đơn vị công việc mà:",
    "options": [
      "Gồm một chuỗi các thao tác bắt buộc phải thực hiện thành công trọn vẹn tất cả, nếu có một thao tác thất bại thì toàn bộ phải quay lại trạng thái ban đầu",
      "Chỉ bao gồm việc in hóa đơn ra giấy",
      "Tự động gửi tiền từ tài khoản này sang tài khoản khác mà không cần kiểm tra số dư",
      "Xóa sạch toàn bộ hệ điều hành khi máy bị nóng"
    ],
    "answer": 0,
    "explain": "Giao dịch tuân thủ nguyên tắc 'Tất cả hoặc không có gì' (All-or-Nothing / Tính nguyên tử - Atomicity) để đảm bảo dữ liệu không bị lấp lửng sai lệch."
  },
  {
    "id": "b11-17",
    "q": "Ví dụ điển hình nhất về việc đòi hỏi tính nhất quán của giao dịch cơ sở dữ liệu trong đời sống là:",
    "options": [
      "Thao tác chuyển tiền giữa hai tài khoản ngân hàng (tài khoản gửi bị trừ tiền thì tài khoản nhận phải được cộng tiền tương ứng)",
      "Việc nghe một bài hát trên YouTube",
      "Thao tác bấm nút tắt màn hình máy tính",
      "Việc gõ một ký tự vào phần mềm Notepad"
    ],
    "answer": 0,
    "explain": "Nếu trừ tiền bên A thành công nhưng mạng đứt trước khi cộng tiền bên B, hệ thống CSDL phải khôi phục lại (Rollback) để không làm mất tiền của khách."
  },
  {
    "id": "b11-18",
    "q": "Mối quan hệ giữa 'Dữ liệu' và 'Cơ sở dữ liệu' có thể so sánh tương tự như mối quan hệ giữa:",
    "options": [
      "Các cuốn sách riêng lẻ và Một thư viện được phân loại sắp xếp khoa học",
      "Cái bánh mì và Cốc nước ngọt",
      "Bàn phím và Chuột máy tính",
      "Ánh sáng mặt trời và Gió mùa đông bắc"
    ],
    "answer": 0,
    "explain": "Dữ liệu là các phần tử thô rời rạc; khi được tập hợp, phân loại có cấu trúc và quản lý bài bản thì tạo thành một Cơ sở dữ liệu."
  },
  {
    "id": "b11-19",
    "q": "Khái niệm 'Toàn vẹn tham chiếu' (Referential Integrity) giữa hai bảng trong cơ sở dữ liệu yêu cầu:",
    "options": [
      "Một giá trị khóa ngoài ở bảng này bắt buộc phải tồn tại trong cột khóa chính của bảng tham chiếu tương ứng",
      "Tất cả các bảng phải có số lượng cột bằng nhau",
      "Tên của các bảng phải bắt đầu bằng chữ cái B",
      "Mọi học sinh phải có cùng một ngày sinh giống nhau"
    ],
    "answer": 0,
    "explain": "Toàn vẹn tham chiếu ngăn ngừa việc tạo bản ghi 'mồ côi' (ví dụ điểm thi của học sinh mang mã HS999 nhưng trong danh sách trường không có ai là HS999)."
  },
  {
    "id": "b11-20",
    "q": "Cơ chế kiểm soát truy cập đồng thời (Concurrency Control) trong CSDL giải quyết bài toán gì?",
    "options": [
      "Cho phép nhiều người dùng cùng truy cập và cập nhật CSDL cùng lúc mà không gây xung đột hay ghi đè mất dữ liệu của nhau",
      "Ngăn chặn máy tính không cho kết nối vào mạng",
      "Bắt buộc mọi người phải xếp hàng gõ phím lần lượt từng người một",
      "Tự động ngắt nguồn máy tính khi có người thứ hai đăng nhập"
    ],
    "answer": 0,
    "explain": "Ví dụ khi hàng nghìn người cùng đặt mua vé xem ca nhạc hoặc vé tàu Tết, cơ chế khóa (Locking) đảm bảo một ghế không bị bán trùng cho hai người."
  },
  {
    "id": "b11-21",
    "q": "Đặc trưng nào giúp cơ sở dữ liệu có thể tồn tại lâu dài qua nhiều thế hệ phần cứng khác nhau?",
    "options": [
      "Tính độc lập dữ liệu",
      "Tính ngẫu nhiên",
      "Tính bí mật",
      "Tính phụ thuộc phần mềm"
    ],
    "answer": 0,
    "explain": "Nhờ tính độc lập vật lý và logic, dữ liệu không bị gắn cứng vào một dòng máy tính cụ thể nào mà có thể chuyển đổi linh hoạt qua các nền tảng mới."
  },
  {
    "id": "b11-22",
    "q": "Tại sao việc thiết kế Cơ sở dữ liệu tốt ngay từ đầu lại có ý nghĩa quyết định sự thành bại của một phần mềm?",
    "options": [
      "Vì nếu cấu trúc CSDL sai sót, hệ thống sẽ chạy chậm chạp, hay gặp lỗi mâu thuẫn dữ liệu và cực kỳ khó khăn, tốn kém khi muốn nâng cấp",
      "Vì người dùng chỉ nhìn thấy cơ sở dữ liệu chứ không nhìn thấy giao diện phần mềm",
      "Vì CSDL quyết định màu sắc vỏ ngoài của máy tính",
      "Vì không có CSDL thì máy tính không thể cắm vào ổ điện"
    ],
    "answer": 0,
    "explain": "CSDL là nền móng của ngôi nhà phần mềm; móng không vững thì các tính năng phía trên sẽ liên tục phát sinh sự cố và đổ vỡ."
  },
  {
    "id": "b11-23",
    "q": "Thao tác nào sau đây KHÔNG THỂ giải quyết được nếu chỉ lưu trữ dữ liệu dưới dạng các tệp văn bản Word rời rạc?",
    "options": [
      "Tìm kiếm và thống kê tự động kết hợp dữ liệu giữa hàng trăm danh sách khác nhau chỉ trong vài mili-giây",
      "Gõ văn bản bằng tiếng Việt",
      "Chèn hình ảnh vào tài liệu",
      "Lưu tài liệu vào thẻ nhớ USB"
    ],
    "answer": 0,
    "explain": "Tệp Word thiếu cấu trúc bảng biểu liên kết quan hệ và ngôn ngữ truy vấn để liên kết dữ liệu đa chiều quy mô lớn."
  },
  {
    "id": "b11-24",
    "q": "Xu thế phát triển của các cơ sở dữ liệu hiện đại trong kỷ nguyên Trí tuệ nhân tạo (AI) và Dữ liệu lớn (Big Data) là:",
    "options": [
      "Xử lý lượng dữ liệu khổng lồ theo thời gian thực, hỗ trợ phân tích đa chiều và lưu trữ phân tán trên nền tảng điện toán đám mây",
      "Quay trở lại dùng sổ sách giấy chép tay để đảm bảo không tốn điện",
      "Giảm dung lượng dữ liệu xuống chỉ còn vài Kilobyte",
      "Cấm kết nối các cơ sở dữ liệu với mạng Internet"
    ],
    "answer": 0,
    "explain": "CSDL hiện đại mở rộng sang CSDL đám mây (Cloud Database), CSDL phi quan hệ (NoSQL) và CSDL đồ thị để cung cấp nguồn dữ liệu khổng lồ cho AI."
  }
];
