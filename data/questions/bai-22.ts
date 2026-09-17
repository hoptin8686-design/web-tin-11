import { Question } from "@/lib/types";

// Bài 22: Thực hành cập nhật bảng dữ liệu có tham chiếu
export const questions: Question[] = [
  {
    "id": "b22-01",
    "q": "Trong CSDL quan hệ, bảng có chứa trường tham chiếu (khóa ngoại) đến khóa chính của bảng khác được gọi là gì?",
    "options": [
      "Bảng cha (bảng tham chiếu)",
      "Bảng con (bảng bị tham chiếu / bảng chứa khóa ngoại)",
      "Bảng độc lập",
      "Bảng chỉ mục"
    ],
    "answer": 1,
    "explain": "Bảng chứa khóa ngoại trỏ tới khóa chính của bảng khác được gọi là bảng con (child table / referencing table)."
  },
  {
    "id": "b22-02",
    "q": "Khi nhập dữ liệu vào hai bảng có quan hệ 1-N liên kết qua khóa ngoại (ví dụ bảng casi và bannhac), thứ tự nhập dữ liệu đúng là gì?",
    "options": [
      "Bảng nào trước cũng được, hệ điều hành tự đồng bộ",
      "Bảng con (bannhac) trước, bảng mẹ (casi) sau",
      "Bảng mẹ (casi) trước, sau đó mới nhập bảng con (bannhac)",
      "Nhập đồng thời cả hai bảng trong cùng một ô nhớ"
    ],
    "answer": 2,
    "explain": "Phải nhập bảng mẹ (chứa khóa chính) trước để bảng con có giá trị khóa ngoại hợp lệ tham chiếu tới."
  },
  {
    "id": "b22-03",
    "q": "Điều gì sẽ xảy ra nếu nhập một bản ghi vào bảng 'bannhac' với giá trị idCasi không hề tồn tại trong bảng 'casi'?",
    "options": [
      "Hệ QTCSDL tự động tạo ca sĩ mới với tên rỗng",
      "Báo lỗi vi phạm ràng buộc khóa ngoại (Foreign key constraint fails)",
      "Dữ liệu tự động gán giá trị khóa chính lớn nhất",
      "Bản ghi vẫn được lưu bình thường và bỏ qua kiểm tra"
    ],
    "answer": 1,
    "explain": "Hệ QTCSDL sẽ ngăn chặn thao tác và báo lỗi vi phạm ràng buộc toàn vẹn tham chiếu (Foreign Key Constraint fails)."
  },
  {
    "id": "b22-04",
    "q": "Ràng buộc toàn vẹn tham chiếu (Referential Integrity) có mục đích chính là gì?",
    "options": [
      "Đảm bảo tốc độ mạng LAN luôn ở mức tối đa",
      "Ngăn chặn việc xuất hiện các con trỏ mồ côi (dữ liệu khóa ngoại trỏ đến bản ghi không tồn tại)",
      "Tăng dung lượng lưu trữ trên ổ đĩa cứng",
      "Tự động mã hóa mật khẩu người dùng"
    ],
    "answer": 1,
    "explain": "Ràng buộc tham chiếu đảm bảo tính nhất quán của dữ liệu, không cho phép bảng con lưu khóa ngoại tham chiếu đến bản ghi không tồn tại ở bảng cha."
  },
  {
    "id": "b22-05",
    "q": "Khi xóa một ca sĩ ở bảng mẹ 'casi', nếu khóa ngoại ở bảng 'bannhac' được đặt tùy chọn ON DELETE RESTRICT thì điều gì xảy ra?",
    "options": [
      "Ca sĩ bị xóa và toàn bộ bài hát của ca sĩ đó cũng bị xóa",
      "Hệ thống từ chối cho xóa ca sĩ chừng nào vẫn còn bài hát của ca sĩ đó trong bảng con",
      "Ca sĩ bị xóa và idCasi ở bảng bài hát tự chuyển về 0",
      "Hệ thống tự động chuyển bài hát sang cho ca sĩ khác"
    ],
    "answer": 1,
    "explain": "ON DELETE RESTRICT (hoặc NO ACTION) sẽ chặn thao tác xóa ở bảng cha nếu còn dữ liệu liên quan đang tham chiếu ở bảng con."
  },
  {
    "id": "b22-06",
    "q": "Tùy chọn ON DELETE CASCADE trong định nghĩa khóa ngoại có tác dụng gì?",
    "options": [
      "Báo lỗi và dừng chương trình",
      "Khi xóa một bản ghi ở bảng cha, toàn bộ các bản ghi liên quan ở bảng con sẽ tự động bị xóa theo",
      "Gán giá trị NULL cho khóa ngoại ở bảng con",
      "Không cho phép xóa bất kỳ dữ liệu nào"
    ],
    "answer": 1,
    "explain": "CASCADE có nghĩa là hiệu ứng thác đổ: xóa dòng ở bảng cha dẫn đến xóa tự động các dòng phụ thuộc ở bảng con."
  },
  {
    "id": "b22-07",
    "q": "Tùy chọn ON UPDATE CASCADE có ý nghĩa gì?",
    "options": [
      "Khi sửa giá trị khóa chính ở bảng cha, giá trị khóa ngoại tương ứng ở bảng con sẽ tự động cập nhật theo",
      "Không cho phép sửa khóa chính ở bảng cha",
      "Tự động sao lưu bảng dữ liệu sang ổ đĩa mạng",
      "Chuyển toàn bộ dữ liệu bảng con thành chữ in hoa"
    ],
    "answer": 0,
    "explain": "ON UPDATE CASCADE tự động cập nhật đồng bộ khóa ngoại ở bảng con khi giá trị khóa chính ở bảng cha thay đổi."
  },
  {
    "id": "b22-08",
    "q": "Để nhập dữ liệu an toàn cho bảng có khóa ngoại trong giao diện HeidiSQL, người dùng nên thực hiện như thế nào?",
    "options": [
      "Tắt toàn bộ kiểm tra khóa ngoại vĩnh viễn",
      "Nhập mã ID đúng theo danh sách mã đã có sẵn trong bảng mẹ tương ứng",
      "Gõ chuỗi ký tự bất kỳ vào trường khóa ngoại",
      "Xóa khóa ngoại trước khi nhập rồi tạo lại sau"
    ],
    "answer": 1,
    "explain": "Người dùng cần tra cứu hoặc chọn mã ID đã tồn tại hợp lệ ở bảng mẹ để điền vào trường khóa ngoại."
  },
  {
    "id": "b22-09",
    "q": "Khi xóa dữ liệu giữa hai bảng có liên kết khóa ngoại theo thứ tự nào là đúng để không bị lỗi ràng buộc?",
    "options": [
      "Xóa dữ liệu ở bảng cha trước, sau đó xóa ở bảng con",
      "Xóa dữ liệu liên quan ở bảng con trước, sau đó mới xóa dữ liệu ở bảng cha",
      "Xóa đồng thời cả hai bảng trong cùng một câu lệnh INSERT",
      "Không bao giờ được phép xóa dữ liệu trong CSDL quan hệ"
    ],
    "answer": 1,
    "explain": "Nguyên tắc xóa: Xóa bảng con trước để không còn bản ghi nào tham chiếu tới bản ghi ở bảng cha, sau đó mới xóa bản ghi ở bảng cha."
  },
  {
    "id": "b22-10",
    "q": "Câu lệnh SQL nào sau đây dùng để chèn bản ghi mới vào bảng 'bannhac' có các trường (idBannhac, tenBannhac, idNhacsi)?",
    "options": [
      "ADD INTO bannhac VALUES (1, 'Tiến quân ca', 2);",
      "INSERT INTO bannhac(idBannhac, tenBannhac, idNhacsi) VALUES (1, 'Tiến quân ca', 2);",
      "UPDATE bannhac SET idBannhac=1, tenBannhac='Tiến quân ca';",
      "SELECT INTO bannhac VALUES (1, 'Tiến quân ca', 2);"
    ],
    "answer": 1,
    "explain": "Cú pháp chuẩn để thêm bản ghi mới là: INSERT INTO ten_bang(danh_sach_cot) VALUES (danh_sach_gia_tri);"
  },
  {
    "id": "b22-11",
    "q": "Trong trường hợp nào ta có thể đặt giá trị khóa ngoại là NULL?",
    "options": [
      "Khóa ngoại luôn bắt buộc phải khác NULL trong mọi thiết kế",
      "Khi trường khóa ngoại không được khai báo NOT NULL và bài hát chưa xác định được ca sĩ/nhạc sĩ",
      "Khi khóa ngoại trùng với khóa chính",
      "Khi trường khóa chính của bảng cha chứa giá trị NULL"
    ],
    "answer": 1,
    "explain": "Nếu cột khóa ngoại cho phép NULL, việc gán NULL có nghĩa là bản ghi đó hiện thời chưa liên kết với bất kỳ bản ghi nào ở bảng cha."
  },
  {
    "id": "b22-12",
    "q": "Khi cập nhật (sửa) giá trị của trường khóa ngoại ở bảng con, điều kiện bắt buộc là gì?",
    "options": [
      "Giá trị mới phải là một số âm",
      "Giá trị mới phải tồn tại trong tập hợp các khóa chính của bảng cha (hoặc là NULL nếu cột cho phép)",
      "Giá trị mới phải dài hơn 10 ký tự",
      "Giá trị mới phải chưa từng xuất hiện ở bất kỳ đâu"
    ],
    "answer": 1,
    "explain": "Giá trị mới của khóa ngoại phải tham chiếu hợp lệ đến một khóa chính hiện có trong bảng cha hoặc NULL."
  },
  {
    "id": "b22-13",
    "q": "Nếu bảng 'bannhac' có 2 khóa ngoại idNhacsi và idTheloai, điều kiện để chèn 1 dòng mới thành công là gì?",
    "options": [
      "Chỉ cần idNhacsi hợp lệ, idTheloai điền tùy ý",
      "Chỉ cần idTheloai hợp lệ, idNhacsi điền tùy ý",
      "Cả idNhacsi và idTheloai đều phải thỏa mãn ràng buộc khóa ngoại tương ứng",
      "Bảng con không thể có nhiều hơn 1 khóa ngoại"
    ],
    "answer": 2,
    "explain": "Mọi khóa ngoại trong bảng con đều phải thỏa mãn ràng buộc toàn vẹn tham chiếu với bảng cha tương ứng."
  },
  {
    "id": "b22-14",
    "q": "Trong công cụ HeidiSQL, khi nhập liệu trực tiếp trên lưới dữ liệu (Data tab), biểu tượng nào biểu thị bản ghi chưa được lưu (đang chỉnh sửa)?",
    "options": [
      "Dấu tích màu xanh",
      "Biểu tượng hình tam giác nhỏ màu đen hoặc bút chì ở đầu dòng",
      "Dấu gạch chéo đỏ",
      "Ổ khóa màu vàng"
    ],
    "answer": 1,
    "explain": "Trong HeidiSQL, biểu tượng hình tam giác hoặc bút chì ở cột tiêu đề dòng biểu thị dòng đang ở chế độ chỉnh sửa chưa ghi xuống CSDL."
  },
  {
    "id": "b22-15",
    "q": "Phím tắt nào thường được dùng trong HeidiSQL để lưu nhanh các thay đổi vừa chỉnh sửa trên lưới dữ liệu?",
    "options": [
      "Ctrl + Z",
      "Enter hoặc click chuyển sang dòng khác / phím Post changes",
      "Alt + F4",
      "Ctrl + Shift + Esc"
    ],
    "answer": 1,
    "explain": "Nhấn Enter, chuyển con trỏ sang dòng khác hoặc bấm nút Post trên thanh công cụ sẽ ghi nhận các thay đổi dữ liệu."
  },
  {
    "id": "b22-16",
    "q": "Nếu muốn xóa toàn bộ các bài hát của nhạc sĩ có idNhacsi = 3 bằng câu lệnh SQL, câu lệnh nào đúng?",
    "options": [
      "REMOVE FROM bannhac WHERE idNhacsi = 3;",
      "DELETE FROM bannhac WHERE idNhacsi = 3;",
      "DROP bannhac WHERE idNhacsi = 3;",
      "CLEAR bannhac FOR idNhacsi = 3;"
    ],
    "answer": 1,
    "explain": "Cú pháp xóa dữ liệu có điều kiện: DELETE FROM ten_bang WHERE dieu_kien;"
  },
  {
    "id": "b22-17",
    "q": "Lỗi 'Cannot delete or update a parent row: a foreign key constraint fails' xuất hiện trong tình huống nào?",
    "options": [
      "Khi thêm bản ghi mới vào bảng độc lập",
      "Khi cố gắng xóa hoặc cập nhật khóa chính ở bảng cha mà bảng con vẫn đang có dữ liệu tham chiếu tới",
      "Khi kết nối mạng bị gián đoạn",
      "Khi tên bảng viết bằng chữ hoa"
    ],
    "answer": 1,
    "explain": "Đây là thông báo lỗi kinh điển của MySQL khi người dùng vi phạm ràng buộc tham chiếu lúc xóa/sửa hàng ở bảng cha."
  },
  {
    "id": "b22-18",
    "q": "Khi cập nhật dữ liệu hàng loạt từ file Excel/CSV vào CSDL có khóa ngoại, ta nên chuẩn bị dữ liệu như thế nào?",
    "options": [
      "Nhập file bảng con trước, file bảng mẹ sau",
      "Đảm bảo toàn bộ các mã khóa ngoại trong file con đều đã được nhập và tồn tại sẵn trong bảng mẹ",
      "Xóa hết dữ liệu bảng mẹ",
      "Đổi toàn bộ các cột mã thành chuỗi văn bản ngẫu nhiên"
    ],
    "answer": 1,
    "explain": "Phải chuẩn hóa dữ liệu nguồn để mọi mã liên kết trong bảng con đều đã hiện diện ở bảng mẹ trước khi import."
  },
  {
    "id": "b22-19",
    "q": "Khái niệm 'con trỏ mồ côi' (orphan record) trong CSDL quan hệ ám chỉ điều gì?",
    "options": [
      "Một bản ghi ở bảng con có giá trị khóa ngoại trỏ tới một bản ghi cha không còn tồn tại",
      "Một bảng CSDL không có tên",
      "Một cột chứa toàn giá trị 0",
      "Một tài khoản người dùng bị khóa"
    ],
    "answer": 0,
    "explain": "Orphan record là bản ghi ở bảng con trỏ tới một khóa chính không hề tồn tại ở bảng cha, làm sai lệch logic CSDL."
  },
  {
    "id": "b22-20",
    "q": "Tùy chọn ON DELETE SET NULL yêu cầu điều kiện gì đối với cột khóa ngoại ở bảng con?",
    "options": [
      "Cột khóa ngoại phải là kiểu dữ liệu DATE",
      "Cột khóa ngoại phải cho phép nhận giá trị NULL (không có thuộc tính NOT NULL)",
      "Cột khóa ngoại phải đồng thời là khóa chính",
      "Cột khóa ngoại phải có độ dài trên 50 ký tự"
    ],
    "answer": 1,
    "explain": "Muốn đặt ON DELETE SET NULL, cột khóa ngoại ở bảng con bắt buộc phải cho phép chứa giá trị NULL (không có ràng buộc NOT NULL)."
  },
  {
    "id": "b22-21",
    "q": "Trong câu lệnh SQL: UPDATE bannhac SET idNhacsi = 5 WHERE idBannhac = 10; thao tác này thực hiện điều gì?",
    "options": [
      "Đổi tên bài hát số 10 thành 5",
      "Thay đổi tác giả của bài hát có mã số 10 thành nhạc sĩ có mã số 5",
      "Xóa bài hát số 10 và nhạc sĩ số 5",
      "Chèn thêm một bài hát mới có mã 15"
    ],
    "answer": 1,
    "explain": "Câu lệnh UPDATE cập nhật cột khóa ngoại idNhacsi thành 5 cho bài hát có idBannhac = 10."
  },
  {
    "id": "b22-22",
    "q": "Vì sao các hệ QTCSDL quan hệ lại mặc định sử dụng cơ chế RESTRICT/NO ACTION cho khóa ngoại?",
    "options": [
      "Vì RESTRICT giúp bảo vệ dữ liệu, tránh vô tình làm mất dữ liệu quan trọng ở bảng con khi xóa bảng cha",
      "Vì hệ thống không hỗ trợ cơ chế nào khác",
      "Vì CASCADE làm tăng gấp đôi dung lượng ổ cứng",
      "Vì RESTRICT chỉ chạy được trên mạng cục bộ"
    ],
    "answer": 0,
    "explain": "Cơ chế an toàn nhất là RESTRICT để cảnh báo và ngăn chặn người dùng vô ý làm mất dấu dữ liệu liên quan."
  },
  {
    "id": "b22-23",
    "q": "Để tạm thời vô hiệu hóa kiểm tra khóa ngoại trong phiên làm việc MySQL khi khôi phục dữ liệu, ta dùng lệnh nào?",
    "options": [
      "SET FOREIGN_KEY_CHECKS = 0;",
      "DISABLE ALL KEYS;",
      "STOP DATABASE ENGINE;",
      "REMOVE CONSTRAINT ALL;"
    ],
    "answer": 0,
    "explain": "Lệnh SET FOREIGN_KEY_CHECKS = 0; tạm thời tắt kiểm tra khóa ngoại trong phiên làm việc hiện tại của MySQL."
  },
  {
    "id": "b22-24",
    "q": "Sau khi hoàn thành việc nhập dữ liệu hàng loạt với kiểm tra khóa ngoại bị tắt, bước bắt buộc tiếp theo là gì?",
    "options": [
      "Tắt máy chủ CSDL",
      "Chạy lệnh SET FOREIGN_KEY_CHECKS = 1; để bật lại kiểm tra ràng buộc toàn vẹn",
      "Xóa sạch dữ liệu vừa nhập",
      "Khởi động lại hệ điều hành máy tính"
    ],
    "answer": 1,
    "explain": "Phải bật lại kiểm tra ràng buộc (SET FOREIGN_KEY_CHECKS = 1;) để đảm bảo tính toàn vẹn dữ liệu cho các thao tác tiếp theo."
  }
];
