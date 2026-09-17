import { Question } from "@/lib/types";

// Bài 20: Thực hành tạo lập các bảng có khóa ngoài
export const questions: Question[] = [
  {
    "id": "b20-01",
    "q": "Trong cơ sở dữ liệu `mymusic`, bảng `bannhac` cần thiết lập liên kết với những bảng nào thông qua các trường Khóa ngoài?",
    "options": [
      "Bảng nhacsi (qua trường idNhacsi) và bảng theloai (qua trường idTheloai)",
      "Bảng casi và bảng banthuam",
      "Chỉ liên kết với bảng khachhang",
      "Không liên kết với bất kỳ bảng nào"
    ],
    "answer": 0,
    "explain": "Bảng bannhac cần 2 khóa ngoài: idNhacsi để biết ai sáng tác, và idTheloai để biết bài hát thuộc dòng nhạc nào."
  },
  {
    "id": "b20-02",
    "q": "Trước khi tạo khóa ngoài `idNhacsi` trong bảng `bannhac`, điều kiện bắt buộc đối với bảng `nhacsi` là:",
    "options": [
      "Bảng nhacsi phải được tạo trước và đã có trường idNhacsi được thiết lập làm Khóa chính",
      "Bảng nhacsi phải bị xóa hoàn toàn khỏi CSDL",
      "Bảng nhacsi phải chứa ít nhất 1 triệu bài hát",
      "Bảng nhacsi phải được đổi tên thành bảng bannhac"
    ],
    "answer": 0,
    "explain": "Bảng cha (chứa khóa chính) bắt buộc phải tồn tại trước thì bảng con mới có thể tạo khóa ngoài tham chiếu tới."
  },
  {
    "id": "b20-03",
    "q": "Trong giao diện thiết kế bảng của HeidiSQL, thẻ nào được dùng chuyên biệt để thiết lập các ràng buộc Khóa ngoài?",
    "options": [
      "Thẻ 'Foreign keys'",
      "Thẻ 'Columns'",
      "Thẻ 'Indexes'",
      "Thẻ 'Data'"
    ],
    "answer": 0,
    "explain": "Thẻ Foreign keys trong HeidiSQL quản lý danh sách các khóa ngoài và thiết lập các hành vi toàn vẹn tham chiếu."
  },
  {
    "id": "b20-04",
    "q": "Khi tạo một khóa ngoài mới trong thẻ Foreign keys của HeidiSQL, người dùng cần chỉ định 3 thông tin cốt lõi nào?",
    "options": [
      "Cột khóa ngoài của bảng hiện tại, Bảng tham chiếu đích và Cột khóa chính của bảng tham chiếu",
      "Họ tên người tạo bảng, Ngày sinh và Số điện thoại",
      "Địa chỉ IP máy chủ, Tên đăng nhập và Mật khẩu",
      "Dung lượng ổ đĩa, Tốc độ quạt tản nhiệt và Điện áp nguồn"
    ],
    "answer": 0,
    "explain": "Khóa ngoài cần biết: Cột nào của bảng con tham chiếu đến Cột nào của Bảng cha nào."
  },
  {
    "id": "b20-05",
    "q": "Ràng buộc 'ON DELETE RESTRICT' trên khóa ngoài có tác dụng bảo vệ dữ liệu như thế nào?",
    "options": [
      "Ngăn chặn không cho phép xóa một nhạc sĩ nếu đang có ít nhất một bài hát tham chiếu đến nhạc sĩ đó",
      "Tự động xóa tất cả các bài hát của nhạc sĩ đó",
      "Tự động đổi tên nhạc sĩ thành vô danh",
      "Cho phép xóa tự do mà không cần kiểm tra"
    ],
    "answer": 0,
    "explain": "RESTRICT cấm xóa bản ghi cha nếu dữ liệu con đang dựa vào, ngăn ngừa tạo ra các bài hát 'mồ côi tác giả'."
  },
  {
    "id": "b20-06",
    "q": "Ràng buộc 'ON UPDATE CASCADE' trên khóa ngoài có ý nghĩa gì?",
    "options": [
      "Khi mã idNhacsi ở bảng nhacsi bị thay đổi giá trị, tất cả các bài hát của nhạc sĩ đó ở bảng bannhac sẽ tự động cập nhật theo giá trị mới",
      "Khóa ngoài sẽ tự động bị xóa bỏ khi cập nhật",
      "Hệ thống sẽ từ chối việc sửa đổi mã nhạc sĩ",
      "Máy tính sẽ phát ra âm thanh cảnh báo"
    ],
    "answer": 0,
    "explain": "CASCADE khi UPDATE tự động lan truyền sự thay đổi mã định danh sang tất cả các bảng con liên kết."
  },
  {
    "id": "b20-07",
    "q": "Đoạn mã SQL (DDL) nào sau đây thể hiện đúng cú pháp định nghĩa khóa ngoài `idNhacsi` trong bảng `bannhac`?",
    "options": [
      "CONSTRAINT fk_bannhac_nhacsi FOREIGN KEY (idNhacsi) REFERENCES nhacsi(idNhacsi)",
      "ADD KEY idNhacsi TO nhacsi(idNhacsi)",
      "MAKE FOREIGN KEY idNhacsi FROM nhacsi",
      "LINK idNhacsi WITH nhacsi.idNhacsi"
    ],
    "answer": 0,
    "explain": "Cú pháp chuẩn SQL: CONSTRAINT <tên_ràng_buộc> FOREIGN KEY (<cột_con>) REFERENCES <bảng_cha>(<cột_cha>)."
  },
  {
    "id": "b20-08",
    "q": "Nếu kiểu dữ liệu của trường `idNhacsi` ở bảng `nhacsi` là `INT(11)`, thì kiểu dữ liệu của trường `idNhacsi` ở bảng `bannhac` BẮT BUỘC phải là:",
    "options": [
      "INT(11) tương thích hoàn toàn",
      "VARCHAR(50)",
      "DATE",
      "DECIMAL(10,2)"
    ],
    "answer": 0,
    "explain": "Khóa ngoài và khóa chính bắt buộc phải có cùng kiểu dữ liệu tương thích hoàn toàn để hệ thống so khớp liên kết."
  },
  {
    "id": "b20-09",
    "q": "Lỗi 'Cannot add foreign key constraint' khi tạo khóa ngoài trong HeidiSQL thường xảy ra do nguyên nhân nào?",
    "options": [
      "Kiểu dữ liệu giữa hai cột khóa không khớp nhau hoặc bảng đang chứa dữ liệu con mồ côi không tồn tại ở bảng cha",
      "Bàn phím máy tính bị lỏng dây cắm",
      "Màn hình máy tính có độ phân giải quá cao",
      "Người dùng đặt tên CSDL có ít hơn 5 chữ cái"
    ],
    "answer": 0,
    "explain": "Lỗi tạo FK phổ biến là không khớp kiểu dữ liệu (INT vs BIGINT/VARCHAR) hoặc dữ liệu hiện có vi phạm tham chiếu."
  },
  {
    "id": "b20-10",
    "q": "Trong bảng `bannhac`, nếu trường `idNhacsi` được tích chọn 'Allow NULL', điều đó cho phép lưu trữ trường hợp nào trong thực tế?",
    "options": [
      "Những bản nhạc khuyết danh chưa rõ tác giả sáng tác (như các làn điệu Dân ca cổ)",
      "Những bản nhạc không có tên bài hát",
      "Những bản nhạc có độ dài bằng 0 giây",
      "Những bản nhạc bị cấm lưu hành"
    ],
    "answer": 0,
    "explain": "Khóa ngoài cho phép NULL giúp biểu diễn các thực thể chưa xác định được mối liên kết cha (bài hát dân gian)."
  },
  {
    "id": "b20-11",
    "q": "Sau khi tạo xong 2 khóa ngoài trong bảng `bannhac`, sơ đồ cấu trúc của CSDL `mymusic` đã hoàn thành mối liên kết nào?",
    "options": [
      "Mối liên kết 1-N từ `nhacsi` sang `bannhac` và mối liên kết 1-N từ `theloai` sang `bannhac`",
      "Mối liên kết giữa máy in và máy tính",
      "Mối liên kết giữa CPU và bàn phím",
      "Mối liên kết giữa điện thoại và sạc pin"
    ],
    "answer": 0,
    "explain": "Bảng bannhac trở thành bảng con nhận 2 mối quan hệ 1-N từ hai bảng cha nhacsi và theloai."
  },
  {
    "id": "b20-12",
    "q": "Trong HeidiSQL, sau khi thiết lập xong khóa ngoài trong thẻ Foreign keys, người dùng phải làm gì để lưu cấu hình?",
    "options": [
      "Nhấn nút 'Save' ở góc dưới bên phải",
      "Tắt phần mềm HeidiSQL ngay lập tức",
      "Xóa bảng bannhac đi",
      "Rút cáp mạng Internet ra"
    ],
    "answer": 0,
    "explain": "Bấm Save để HeidiSQL gửi lệnh `ALTER TABLE bannhac ADD CONSTRAINT ...` thực thi lưu khóa ngoài vào MySQL."
  },
  {
    "id": "b20-13",
    "q": "Thuộc tính `ON DELETE SET NULL` trên khóa ngoài có nghĩa là:",
    "options": [
      "Khi bản ghi cha bị xóa, giá trị khóa ngoài ở các bản ghi con tương ứng sẽ tự động chuyển thành giá trị NULL",
      "Tất cả các bản ghi con sẽ bị xóa theo",
      "Hệ thống sẽ từ chối việc xóa bản ghi cha",
      "Máy tính sẽ tự động tắt nguồn"
    ],
    "answer": 0,
    "explain": "SET NULL giữ lại bản ghi con nhưng đặt giá trị tham chiếu về trạng thái chưa xác định (NULL)."
  },
  {
    "id": "b20-14",
    "q": "Quy tắc đặt tên khóa ngoài thường tuân theo quy ước nào để dễ phân biệt và quản trị?",
    "options": [
      "fk_<tên_bảng_con>_<tên_bảng_cha> (ví dụ: fk_bannhac_nhacsi)",
      "Đặt tên theo bài hát ưa thích",
      "Đặt tên bằng các con số ngẫu nhiên 12345",
      "Không cần đặt tên"
    ],
    "answer": 0,
    "explain": "Quy ước fk_bangcon_bangcha giúp các lập trình viên dễ nhận diện các ràng buộc liên kết trong CSDL."
  },
  {
    "id": "b20-15",
    "q": "Động cơ lưu trữ nào của MySQL BẮT BUỘC phải được sử dụng để hỗ trợ các ràng buộc Khóa ngoài (Foreign Key)?",
    "options": [
      "InnoDB",
      "MyISAM",
      "MEMORY",
      "ARCHIVE"
    ],
    "answer": 0,
    "explain": "InnoDB là Engine chính thức của MySQL hỗ trợ đầy đủ các ràng buộc toàn vẹn khóa ngoài (MyISAM cũ không hỗ trợ FK)."
  },
  {
    "id": "b20-16",
    "q": "Một bảng con có thể chứa tối đa bao nhiêu Khóa ngoài (Foreign Keys)?",
    "options": [
      "Nhiều khóa ngoài tham chiếu tới nhiều bảng cha khác nhau theo nhu cầu thiết kế",
      "Chỉ duy nhất 1 khóa ngoài",
      "Bắt buộc phải có đúng 2 khóa ngoài",
      "Không bao giờ được phép có quá 0 khóa ngoài"
    ],
    "answer": 0,
    "explain": "Một bảng con có thể có nhiều khóa ngoài để liên kết với nhiều thực thể cha khác nhau."
  },
  {
    "id": "b20-17",
    "q": "Lợi ích lớn nhất của việc thiết lập ràng buộc Khóa ngoài thay vì chỉ lưu một cột số thông thường là gì?",
    "options": [
      "Hệ quản trị CSDL sẽ tự động kiểm tra tính hợp lệ và ngăn chặn triệt để việc nhập mã nhạc sĩ không có thật",
      "Làm cho tệp CSDL có dung lượng nhỏ hơn",
      "Làm cho bài hát phát ra âm thanh to hơn",
      "Giúp màn hình máy tính sáng hơn"
    ],
    "answer": 0,
    "explain": "Ràng buộc FK do DBMS kiểm soát tự động, bảo vệ toàn vẹn dữ liệu ở cấp độ động cơ CSDL."
  },
  {
    "id": "b20-18",
    "q": "Khi tạo bảng `banthuam` liên kết giữa `bannhac` và `casi`, bảng `banthuam` sẽ có các khóa ngoài nào?",
    "options": [
      "idBannhac (tham chiếu bannhac) và idCasi (tham chiếu casi)",
      "idNhacsi và idTheloai",
      "soDienThoai và email",
      "Không có khóa ngoài nào"
    ],
    "answer": 0,
    "explain": "Bảng trung gian thu âm kết nối bản nhạc và ca sĩ qua 2 khóa ngoài tương ứng."
  },
  {
    "id": "b20-19",
    "q": "Trong thẻ 'Indexes' của HeidiSQL sau khi tạo khóa ngoài, ta sẽ thấy điều gì xuất hiện tự động?",
    "options": [
      "Một chỉ mục (Index) tự động được tạo trên cột khóa ngoài để tối ưu hóa tốc độ tìm kiếm và liên kết",
      "Một bức tranh vẽ phong cảnh",
      "Một tệp nhạc MP3 tự động phát",
      "Toàn bộ dữ liệu của máy chủ bị mã hóa"
    ],
    "answer": 0,
    "explain": "MySQL tự động tạo chỉ mục trên các cột khóa ngoài để tăng tốc độ kết nối bảng (JOIN)."
  },
  {
    "id": "b20-20",
    "q": "Nếu người dùng muốn xóa bỏ một ràng buộc khóa ngoài đã tạo trong HeidiSQL, thao tác thực hiện là:",
    "options": [
      "Mở thẻ Foreign keys, nhấp chọn khóa ngoài cần xóa -> nhấn nút 'Delete' -> bấm nút 'Save'",
      "Bắt buộc phải xóa cả bảng bannhac",
      "Cài lại hệ điều hành Windows",
      "Tắt nguồn máy tính"
    ],
    "answer": 0,
    "explain": "Thao tác xóa khóa ngoài trực quan trong thẻ Foreign keys tương đương lệnh `ALTER TABLE ... DROP FOREIGN KEY`."
  },
  {
    "id": "b20-21",
    "q": "Thuộc tính 'MATCH' trong định nghĩa khóa ngoài chuẩn ANSI SQL quy định điều gì?",
    "options": [
      "Quy tắc so khớp giá trị khi khóa ngoài gồm nhiều cột kết hợp có chứa giá trị NULL (MATCH FULL, MATCH SIMPLE)",
      "Trận thi đấu bóng đá giữa hai đội",
      "Độ sáng tối của màn hình",
      "Tốc độ gõ phím của người dùng"
    ],
    "answer": 0,
    "explain": "Thuộc tính MATCH quy định cơ chế so khớp khóa tổng hợp khi có trường mang giá trị NULL."
  },
  {
    "id": "b20-22",
    "q": "Khi xuất mã tạo bảng (CREATE code) của bảng `bannhac`, mệnh đề khóa ngoài nằm ở vị trí nào?",
    "options": [
      "Nằm ở phần định nghĩa các ràng buộc (CONSTRAINT) phía dưới danh sách khai báo các cột",
      "Nằm ngay ở dòng đầu tiên trước tên bảng",
      "Nằm ở ngoài tệp tin khác",
      "Không bao giờ xuất hiện trong mã CREATE TABLE"
    ],
    "answer": 0,
    "explain": "Trong câu lệnh CREATE TABLE, các ràng buộc CONSTRAINT FOREIGN KEY được khai báo ở phần đuôi sau danh sách cột."
  },
  {
    "id": "b20-23",
    "q": "Thao tác tạo lập các bảng có khóa ngoài hoàn tất giai đoạn nào trong quy trình phát triển phần mềm?",
    "options": [
      "Giai đoạn Định nghĩa cấu trúc lược đồ cơ sở dữ liệu (Database Schema Definition)",
      "Giai đoạn bảo hành sản phẩm sau 10 năm",
      "Giai đoạn thanh lý tài sản máy tính",
      "Giai đoạn thiết kế vỏ hộp đóng gói sản phẩm"
    ],
    "answer": 0,
    "explain": "Hoàn thành lược đồ CSDL sẵn sàng cho các giai đoạn lập trình ứng dụng và nhập liệu thực tế."
  },
  {
    "id": "b20-24",
    "q": "Tại sao một hệ thống cơ sở dữ liệu thương mại không thể thiếu các ràng buộc khóa ngoài?",
    "options": [
      "Vì thiếu khóa ngoài, dữ liệu sẽ nhanh chóng bị 'rác hóa' với các đơn hàng không có khách hàng hoặc chi tiết hóa đơn không có sản phẩm",
      "Vì máy chủ sẽ từ chối bật nguồn điện",
      "Vì pháp luật cấm sử dụng máy tính không có khóa ngoài",
      "Vì chuột máy tính sẽ không thể bấm được"
    ],
    "answer": 0,
    "explain": "Khóa ngoài là chốt chặn kỹ thuật bảo đảm sự gắn kết hữu cơ và tính đúng đắn của toàn bộ mô hình dữ liệu."
  }
];
