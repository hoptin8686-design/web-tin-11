import { Question } from "@/lib/types";

// Bài 13: Cơ sở dữ liệu quan hệ
export const questions: Question[] = [
  {
    "id": "b13-01",
    "q": "Mô hình dữ liệu quan hệ (Relational Data Model) lần đầu tiên được nhà khoa học nào đề xuất vào năm 1970?",
    "options": [
      "E. F. Codd (Edgar Frank Codd)",
      "Alan Turing",
      "Bill Gates",
      "Steve Jobs"
    ],
    "answer": 0,
    "explain": "E. F. Codd (làm việc tại IBM) đã đề xuất mô hình dữ liệu quan hệ dựa trên lý thuyết tập hợp toán học vào năm 1970."
  },
  {
    "id": "b13-02",
    "q": "Trong cơ sở dữ liệu quan hệ, dữ liệu được tổ chức lưu trữ dưới dạng cấu trúc nào?",
    "options": [
      "Các bảng (Table) hai chiều gồm các hàng và các cột",
      "Một cây phân cấp hình chóp",
      "Một mạng lưới các vòng tròn nối với nhau",
      "Các tệp âm thanh MP3 lưu trong thư mục"
    ],
    "answer": 0,
    "explain": "Mô hình quan hệ biểu diễn dữ liệu trực quan và logic dưới dạng các bảng 2 chiều (Relations)."
  },
  {
    "id": "b13-03",
    "q": "Trong một bảng quan hệ, mỗi 'Hàng' (Row / Tuple) đại diện cho:",
    "options": [
      "Một bản ghi (Record) thể hiện một cá thể (thực thể) cụ thể của đối tượng cần quản lý",
      "Một thuộc tính chung của tất cả các đối tượng",
      "Tên của hệ quản trị cơ sở dữ liệu",
      "Dung lượng của thanh nhớ RAM"
    ],
    "answer": 0,
    "explain": "Mỗi hàng là một bản ghi chứa đầy đủ các thông tin thuộc tính của một thực thể cụ thể (ví dụ một học sinh cụ thể)."
  },
  {
    "id": "b13-04",
    "q": "Trong một bảng quan hệ, mỗi 'Cột' (Column / Field) đại diện cho:",
    "options": [
      "Một thuộc tính (Attribute) của đối tượng cần quản lý, có cùng một kiểu dữ liệu",
      "Toàn bộ một lớp học gồm 40 học sinh",
      "Một ổ đĩa cứng trên máy chủ",
      "Một giao dịch thanh toán ngân hàng đã hoàn tất"
    ],
    "answer": 0,
    "explain": "Cột là một trường dữ liệu (Field) mô tả một đặc trưng thuộc tính của đối tượng (như Ngày sinh, Điểm toán, Quê quán)."
  },
  {
    "id": "b13-05",
    "q": "Khái niệm 'Khóa chính' (Primary Key - PK) của một bảng trong CSDL quan hệ là gì?",
    "options": [
      "Một hoặc một tập hợp các cột dùng để xác định duy nhất mỗi hàng trong bảng, không được phép rỗng (NOT NULL) và không được trùng lặp",
      "Chiếc chìa khóa kim loại dùng để mở cửa phòng máy tính",
      "Cột chứa các số thứ tự tự động tăng từ 1 đến 10",
      "Tên của người quản trị cơ sở dữ liệu"
    ],
    "answer": 0,
    "explain": "Khóa chính định danh duy nhất mỗi bản ghi trong bảng, là nền tảng để thiết lập các mối quan hệ liên kết bảng."
  },
  {
    "id": "b13-06",
    "q": "Đặc điểm nào sau đây là BẮT BUỘC đối với giá trị của một Khóa chính trong CSDL quan hệ?",
    "options": [
      "Phải là duy nhất (không được trùng lặp giữa các hàng) và không được chứa giá trị rỗng (NOT NULL)",
      "Bắt buộc phải là kiểu số thực có dấu phẩy",
      "Phải chứa các ký tự đặc biệt như @ hoặc #",
      "Phải thay đổi giá trị sau mỗi 10 phút"
    ],
    "answer": 0,
    "explain": "Quy tắc toàn vẹn thực thể (Entity Integrity): Khóa chính phải duy nhất và không được NULL."
  },
  {
    "id": "b13-07",
    "q": "Khái niệm 'Khóa ngoài' (Foreign Key - FK) trong cơ sở dữ liệu quan hệ là gì?",
    "options": [
      "Một cột (hoặc tập cột) trong bảng này tham chiếu đến cột Khóa chính của một bảng khác để tạo mối liên kết giữa hai bảng",
      "Một chiếc khóa mua từ nước ngoài về",
      "Cột dữ liệu bị xóa bỏ không dùng nữa",
      "Mật khẩu đăng nhập vào máy tính của trường"
    ],
    "answer": 0,
    "explain": "Khóa ngoài là cầu nối liên kết bảng: giá trị của nó phải khớp với giá trị khóa chính của bảng tham chiếu."
  },
  {
    "id": "b13-08",
    "q": "Mối quan hệ nào sau đây là mối quan hệ phổ biến nhất giữa các bảng trong cơ sở dữ liệu quan hệ?",
    "options": [
      "Quan hệ Một - Nhiều (1 - N)",
      "Quan hệ Một - Một (1 - 1)",
      "Quan hệ Không - Không (0 - 0)",
      "Quan hệ Độc lập hoàn toàn không liên kết"
    ],
    "answer": 0,
    "explain": "Quan hệ 1-N là phổ biến nhất: Một lớp học có nhiều học sinh; Một khách hàng có nhiều đơn hàng; Một ca sĩ có nhiều bản thu âm."
  },
  {
    "id": "b13-09",
    "q": "Để giải quyết mối quan hệ Nhiều - Nhiều (N - N) giữa hai bảng trong CSDL quan hệ, người ta làm thế nào?",
    "options": [
      "Tách mối quan hệ N - N thành hai mối quan hệ 1 - N thông qua một bảng trung gian (bảng nối / Junction Table)",
      "Gộp hai bảng lại thành một bảng duy nhất có 1000 cột",
      "Xóa bỏ hoàn toàn một trong hai bảng",
      "Không cần làm gì vì CSDL quan hệ tự hiểu"
    ],
    "answer": 0,
    "explain": "Mô hình quan hệ chuẩn hóa tách N-N thành hai quan hệ 1-N thông qua bảng trung gian chứa khóa ngoài trỏ về hai bảng gốc."
  },
  {
    "id": "b13-10",
    "q": "Ví dụ nào sau đây thể hiện đúng mối quan hệ Một - Nhiều (1 - N) trong thực tế?",
    "options": [
      "Một Khoa đào tạo trong trường đại học có Nhiều Lớp sinh viên thuộc khoa đó",
      "Một công dân Việt Nam sở hữu cùng lúc nhiều số Căn cước công dân khác nhau",
      "Một học sinh có cùng lúc 10 người mẹ ruột",
      "Một chiếc ô tô chỉ có duy nhất một chiếc bánh xe"
    ],
    "answer": 0,
    "explain": "Một Khoa có nhiều lớp, nhưng mỗi lớp chỉ thuộc về duy nhất một Khoa đào tạo (quan hệ 1 - N chuẩn)."
  },
  {
    "id": "b13-11",
    "q": "Quy tắc 'Toàn vẹn tham chiếu' (Referential Integrity) yêu cầu điều gì khi nhập dữ liệu cho cột Khóa ngoài?",
    "options": [
      "Giá trị nhập vào cột Khóa ngoài bắt buộc phải là giá trị đã tồn tại trong cột Khóa chính của bảng được tham chiếu (hoặc có thể để giá trị NULL)",
      "Giá trị khóa ngoài phải lớn hơn giá trị khóa chính gấp 10 lần",
      "Khóa ngoài bắt buộc phải bắt đầu bằng chữ cái Z",
      "Khóa ngoài không bao giờ được phép giống khóa chính"
    ],
    "answer": 0,
    "explain": "Nếu nhập mã lớp '11A99' vào bảng Học sinh mà trong bảng Lớp học không có lớp 11A99 thì hệ thống sẽ báo lỗi vi phạm toàn vẹn tham chiếu."
  },
  {
    "id": "b13-12",
    "q": "Một bảng trong CSDL quan hệ có thể có tối đa bao nhiêu Khóa chính (Primary Key)?",
    "options": [
      "Duy nhất 1 khóa chính (khóa chính này có thể gồm 1 hoặc nhiều cột kết hợp)",
      "Không giới hạn số lượng, bao nhiêu khóa chính cũng được",
      "Bắt buộc phải có đúng 10 khóa chính",
      "Không bao giờ được phép có khóa chính"
    ],
    "answer": 0,
    "explain": "Mỗi bảng chỉ có duy nhất MỘT khóa chính; nếu khóa chính gồm từ 2 cột trở lên thì gọi là Khóa chính tổng hợp (Composite Key)."
  },
  {
    "id": "b13-13",
    "q": "Trong bảng HỌC_SINH gồm các trường (MaHS, HoTen, NgaySinh, GioiTinh, MaLop), trường nào thích hợp nhất để chọn làm Khóa chính?",
    "options": [
      "MaHS (Mã học sinh)",
      "HoTen (Họ và tên)",
      "NgaySinh (Ngày sinh)",
      "GioiTinh (Giới tính)"
    ],
    "answer": 0,
    "explain": "Họ tên, ngày sinh, giới tính đều có thể bị trùng lặp giữa nhiều học sinh; chỉ có MaHS là định danh duy nhất không trùng."
  },
  {
    "id": "b13-14",
    "q": "Trong bảng HỌC_SINH ở câu trên, trường MaLop đóng vai trò là gì?",
    "options": [
      "Khóa ngoài (Foreign Key) tham chiếu đến cột MaLop trong bảng LOP_HOC",
      "Khóa chính của bảng HỌC_SINH",
      "Một trường ghi chú không có ý nghĩa liên kết",
      "Một đoạn mã độc máy tính"
    ],
    "answer": 0,
    "explain": "MaLop trong bảng HỌC_SINH là khóa ngoài để liên kết mỗi học sinh với một lớp học cụ thể trong bảng LOP_HOC."
  },
  {
    "id": "b13-15",
    "q": "Khái niệm 'Miền giá trị' (Domain) của một thuộc tính trong CSDL quan hệ là:",
    "options": [
      "Tập hợp tất cả các giá trị hợp lệ mà thuộc tính đó có thể nhận",
      "Tên của tỉnh thành nơi đặt máy chủ CSDL",
      "Độ dài của dây cáp nối màn hình máy tính",
      "Thời gian một năm học"
    ],
    "answer": 0,
    "explain": "Miền giá trị xác định kiểu dữ liệu và tập giá trị hợp lệ (ví dụ miền giá trị của Giới tính chỉ là {'Nam', 'Nữ'})."
  },
  {
    "id": "b13-16",
    "q": "Khi xóa một bản ghi ở bảng cha (bảng chứa khóa chính), nếu có các bản ghi ở bảng con (chứa khóa ngoài) đang tham chiếu tới thì tùy chọn 'RESTRICT' (hoặc NO ACTION) sẽ xử lý thế nào?",
    "options": [
      "Ngăn chặn không cho phép xóa bản ghi ở bảng cha để tránh tạo ra các bản ghi mồ côi ở bảng con",
      "Tự động xóa sạch toàn bộ cơ sở dữ liệu",
      "Xóa luôn cả hệ điều hành Windows",
      "Tự động tắt máy tính ngay lập tức"
    ],
    "answer": 0,
    "explain": "Quy tắc RESTRICT bảo vệ toàn vẹn: cấm xóa một Lớp học nếu trong lớp đó vẫn còn học sinh đang theo học."
  },
  {
    "id": "b13-17",
    "q": "Tùy chọn 'CASCADE' trong ràng buộc khóa ngoài khi xóa bản ghi ở bảng cha sẽ thực hiện hành động gì?",
    "options": [
      "Tự động xóa đồng thời tất cả các bản ghi ở bảng con có liên kết tham chiếu tới bản ghi bị xóa ở bảng cha",
      "Để nguyên các bản ghi ở bảng con mà không làm gì",
      "Đổi tên bảng con thành bảng cha",
      "Gửi thư điện tử cảnh báo cho giáo viên"
    ],
    "answer": 0,
    "explain": "CASCADE (xóa tầng/xóa liên hoàn) tự động dọn dẹp các bản ghi phụ thuộc ở bảng con khi bản ghi cha bị xóa."
  },
  {
    "id": "b13-18",
    "q": "Mối quan hệ giữa bảng BÁC_SĨ và bảng BỆNH_NHÂN (một bác sĩ có thể khám cho nhiều bệnh nhân, một bệnh nhân có thể được nhiều bác sĩ hội chẩn) thuộc loại quan hệ nào?",
    "options": [
      "Quan hệ Nhiều - Nhiều (N - N)",
      "Quan hệ Một - Một (1 - 1)",
      "Quan hệ Một - Nhiều (1 - N)",
      "Quan hệ không xác định"
    ],
    "answer": 0,
    "explain": "Mỗi bên đều có thể kết hợp với nhiều thực thể ở bên kia, tạo thành quan hệ N - N (được giải quyết qua bảng KHAM_BENH)."
  },
  {
    "id": "b13-19",
    "q": "Tại sao trong một bảng quan hệ, thứ tự của các hàng và thứ tự của các cột KHÔNG CÓ Ý NGHĨA toán học?",
    "options": [
      "Vì bảng là một tập hợp các phần tử theo toán học tập hợp, dữ liệu được truy xuất theo tên cột và điều kiện khóa chứ không theo số thứ tự vị trí",
      "Vì máy tính không thể đếm được số từ 1 đến 10",
      "Vì màn hình máy tính luôn tự động đảo lộn các cột",
      "Vì người lập trình viên thích sắp xếp thế nào cũng được"
    ],
    "answer": 0,
    "explain": "Trong đại số quan hệ, bảng là một tập hợp; việc hoán đổi vị trí hai hàng hoặc hai cột không làm thay đổi bản chất thông tin của bảng."
  },
  {
    "id": "b13-20",
    "q": "Giá trị 'NULL' trong một ô dữ liệu của cơ sở dữ liệu quan hệ biểu thị điều gì?",
    "options": [
      "Giá trị chưa biết, chưa xác định hoặc không áp dụng được tại thời điểm hiện tại",
      "Số không (0) trong toán học",
      "Một chuỗi rỗng có độ dài bằng 0",
      "Một lỗi virus nghiêm trọng làm hỏng tệp"
    ],
    "answer": 0,
    "explain": "NULL là trạng thái vắng mặt của dữ liệu (chưa có thông tin), hoàn toàn khác với số 0 hay chuỗi khoảng trắng rỗng."
  },
  {
    "id": "b13-21",
    "q": "Khái niệm 'Chuẩn hóa dữ liệu' (Database Normalization - 1NF, 2NF, 3NF) trong thiết kế CSDL quan hệ nhằm mục đích cốt lõi là:",
    "options": [
      "Loại bỏ tối đa sự dư thừa dữ liệu và ngăn ngừa các dị thường (bất thường) khi Thêm, Sửa, Xóa dữ liệu",
      "Tăng dung lượng CSDL lên càng nhiều Gigabyte càng tốt",
      "Biến tất cả các bảng thành các tệp hình ảnh PNG",
      "Cấm không cho người dùng tìm kiếm dữ liệu"
    ],
    "answer": 0,
    "explain": "Chuẩn hóa CSDL phân rã các bảng chưa chuẩn thành các bảng có cấu trúc chặt chẽ, tránh trùng lặp và dị thường cập nhật."
  },
  {
    "id": "b13-22",
    "q": "Bảng được coi là ở 'Dạng chuẩn 1' (1NF - First Normal Form) khi thỏa mãn điều kiện cơ bản nào?",
    "options": [
      "Mỗi ô tại giao điểm của một hàng và một cột chỉ chứa một giá trị nguyên tố (nguyên tử), không chứa danh sách nhiều giá trị",
      "Bảng phải có đúng 1 triệu dòng dữ liệu",
      "Tên bảng phải viết bằng chữ in hoa",
      "Bảng chỉ chứa duy nhất một cột số nguyên"
    ],
    "answer": 0,
    "explain": "1NF yêu cầu tính nguyên tố (Atomic values): không được chứa nhiều số điện thoại hay nhiều sở thích trong cùng một ô."
  },
  {
    "id": "b13-23",
    "q": "Thuật ngữ 'Hệ quản trị cơ sở dữ liệu quan hệ' trong tiếng Anh được viết tắt là:",
    "options": [
      "RDBMS (Relational Database Management System)",
      "RAM (Random Access Memory)",
      "ROM (Read Only Memory)",
      "CPU (Central Processing Unit)"
    ],
    "answer": 0,
    "explain": "RDBMS là viết tắt của Relational Database Management System - Hệ quản trị CSDL quan hệ."
  },
  {
    "id": "b13-24",
    "q": "Lý do quan trọng nhất khiến Mô hình dữ liệu quan hệ trở thành chuẩn mực thống trị toàn cầu hơn 50 năm qua là:",
    "options": [
      "Cấu trúc bảng 2 chiều cực kỳ trực quan, dễ hiểu với con người, có nền tảng toán học tập hợp vững chắc và sử dụng ngôn ngữ SQL chuẩn hóa",
      "Vì không có ai nghĩ ra mô hình nào khác",
      "Vì các hãng máy tính ép buộc người dùng phải dùng",
      "Vì phần mềm CSDL quan hệ hoàn toàn không tốn dung lượng ổ cứng"
    ],
    "answer": 0,
    "explain": "Mô hình quan hệ vừa đơn giản trực quan cho người dùng, vừa có nền tảng toán học chặt chẽ và công cụ truy vấn SQL mạnh mẽ."
  }
];
