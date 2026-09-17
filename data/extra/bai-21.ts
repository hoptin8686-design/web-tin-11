import { LessonExtra } from "@/lib/types";

// Bài 21: Thực hành cập nhật và truy xuất dữ liệu các bảng đơn giản (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b21-tf1",
      "context": "Trong buổi thực hành nhập liệu và truy vấn dữ liệu trên bảng casi của CSDL mymusic bằng HeidiSQL:",
      "statements": [
        {
          "text": "a) Thẻ 'Data' cho phép người dùng nhập trực tiếp tên ca sĩ vào lưới dữ liệu giống như thao tác trên bảng tính Excel.",
          "answer": true,
          "explain": "Đúng. Thao tác giao diện lưới rất trực quan và tiện dụng."
        },
        {
          "text": "b) Do cột idCasi có thuộc tính AUTO_INCREMENT nên người dùng không cần gõ giá trị cho cột này, hệ thống sẽ tự động điền số tăng dần.",
          "answer": true,
          "explain": "Đúng. Auto-increment tự động cấp phát số thứ tự duy nhất."
        },
        {
          "text": "c) Câu lệnh SQL 'INSERT INTO casi (tenCasi) VALUES ('Mỹ Tâm');' dùng để chèn một ca sĩ mới vào bảng.",
          "answer": true,
          "explain": "Đúng. Cú pháp INSERT INTO chuẩn xác."
        },
        {
          "text": "d) Sau khi chèn dữ liệu vào bảng, bắt buộc phải tắt máy tính thì dữ liệu mới được lưu vào CSDL.",
          "answer": false,
          "explain": "Sai. Dữ liệu được ghi ngay lập tức vào CSDL trên máy chủ khi chuyển dòng hoặc nhấn Save."
        }
      ]
    },
    {
      "id": "b21-tf2",
      "context": "Về thao tác sửa đổi và xóa dữ liệu trong bảng:",
      "statements": [
        {
          "text": "a) Câu lệnh 'UPDATE casi SET tenCasi = 'Đăng Dương' WHERE idCasi = 2;' chỉ sửa đổi tên của ca sĩ có mã idCasi bằng 2.",
          "answer": true,
          "explain": "Đúng. Mệnh đề WHERE giới hạn phạm vi cập nhật chính xác."
        },
        {
          "text": "b) Nếu chạy câu lệnh 'DELETE FROM casi;' mà quên không viết mệnh đề WHERE, toàn bộ các bản ghi trong bảng casi sẽ bị xóa sạch.",
          "answer": true,
          "explain": "Đúng. Thiếu WHERE trong lệnh DELETE là lỗi thao tác nguy hiểm làm mất sạch dữ liệu."
        },
        {
          "text": "c) Người dùng có thể xóa một dòng dữ liệu trong thẻ Data bằng cách chọn dòng đó và nhấn phím Delete.",
          "answer": true,
          "explain": "Đúng. Thao tác phím tắt xóa dòng nhanh chóng."
        },
        {
          "text": "d) Trong HeidiSQL, phím F5 được dùng để xóa toàn bộ cơ sở dữ liệu.",
          "answer": false,
          "explain": "Sai. Phím F5 là phím làm mới dữ liệu (Refresh) hiển thị từ máy chủ về màn hình."
        }
      ]
    },
    {
      "id": "b21-tf3",
      "context": "Về các câu lệnh truy vấn lọc và sắp xếp dữ liệu:",
      "statements": [
        {
          "text": "a) Câu lệnh 'SELECT * FROM casi WHERE tenCasi LIKE 'T%';' sẽ lọc ra tất cả các ca sĩ có nghệ danh bắt đầu bằng chữ 'T'.",
          "answer": true,
          "explain": "Đúng. Mẫu so khớp 'T%' lọc chuỗi bắt đầu bằng T."
        },
        {
          "text": "b) Mệnh đề 'ORDER BY tenCasi ASC' sẽ sắp xếp danh sách ca sĩ theo thứ tự bảng chữ cái tăng dần từ A đến Z.",
          "answer": true,
          "explain": "Đúng. ASC là viết tắt của Ascending (tăng dần)."
        },
        {
          "text": "c) Câu lệnh 'SELECT COUNT(*) FROM casi;' trả về danh sách tất cả các bài hát mà ca sĩ đó đã từng biểu diễn.",
          "answer": false,
          "explain": "Sai. COUNT(*) chỉ trả về MỘT CON SỐ đếm tổng số lượng ca sĩ có trong bảng."
        },
        {
          "text": "d) Mệnh đề LIMIT 5 trong MySQL giúp giới hạn kết quả trả về chỉ gồm 5 bản ghi đầu tiên.",
          "answer": true,
          "explain": "Đúng. LIMIT quy định số hàng kết quả tối đa."
        }
      ]
    },
    {
      "id": "b21-tf4",
      "context": "Về việc thực thi câu lệnh trong tab Query của HeidiSQL:",
      "statements": [
        {
          "text": "a) Học sinh có thể viết câu lệnh SQL trong tab Query và nhấn phím tắt F9 để thực thi câu lệnh.",
          "answer": true,
          "explain": "Đúng. Phím F9 chạy tập lệnh SQL rất tiện lợi."
        },
        {
          "text": "b) Nếu câu lệnh SQL bị viết sai cú pháp (như viết sai từ khóa SELCT thay vì SELECT), hệ thống sẽ báo lỗi chi tiết ở khung nhật ký bên dưới.",
          "answer": true,
          "explain": "Đúng. Trình biên dịch MySQL trả về mã lỗi và vị trí lỗi cụ thể."
        },
        {
          "text": "c) Kết quả của câu lệnh SELECT sẽ được hiển thị ngay tại khung lưới dữ liệu phía dưới tab Query.",
          "answer": true,
          "explain": "Đúng. Bảng kết quả hiển thị trực quan bên dưới mã lệnh."
        },
        {
          "text": "d) Tab Query chỉ cho phép chạy các câu lệnh xem dữ liệu, không bao giờ cho phép chạy các lệnh INSERT hay UPDATE.",
          "answer": false,
          "explain": "Sai. Tab Query thực thi được tất cả các câu lệnh SQL: DDL, DML, DCL không hạn chế."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b21-es1",
      "q": "Trình bày hai cách để thêm mới một bản ghi ca sĩ có tên là 'Tùng Dương' vào bảng `casi` trong HeidiSQL: một cách bằng giao diện đồ họa (GUI) trên thẻ Data và một cách bằng câu lệnh SQL trong tab Query.",
      "answer": "1. Cách 1: Thao tác bằng giao diện đồ họa (GUI) trên thẻ Data:\n- Bước 1: Tại cây danh mục bên trái, nhấp chọn bảng `casi` và mở thẻ 'Data' ở khung bên phải.\n- Bước 2: Nhấn phím 'Insert' trên bàn phím (hoặc nhấp đúp chuột vào hàng trống có dấu sao * ở cuối bảng).\n- Bước 3: Cột `idCasi` để trống (hệ thống sẽ tự động điền số tự tăng); nhấp đúp chuột vào ô cột `tenCasi` và gõ tên 'Tùng Dương'.\n- Bước 4: Nhấn phím Enter hoặc nhấp chuột sang dòng khác để hệ thống tự động ghi lưu bản ghi mới vào CSDL.\n\n2. Cách 2: Sử dụng câu lệnh SQL trong tab Query:\n- Bước 1: Nhấp chuyển sang tab 'Query' trong HeidiSQL.\n- Bước 2: Gõ câu lệnh SQL chuẩn:\n  INSERT INTO casi (tenCasi) VALUES ('Tùng Dương');\n- Bước 3: Nhấn phím F9 (hoặc nút Run hình tam giác xanh) để thực thi. Khung thông báo bên dưới báo '1 row affected' xác nhận chèn thành công."
    },
    {
      "id": "b21-es2",
      "q": "Viết các câu lệnh SQL hoàn chỉnh thực hiện các thao tác sau trên bảng `nhacsi`:\na) Chèn thêm 3 nhạc sĩ: 'Văn Cao', 'Trịnh Công Sơn', 'Phạm Tuyên'.\nb) Sửa tên nhạc sĩ có mã `idNhacsi = 2` thành 'Nhạc sĩ Trịnh Công Sơn'.\nc) Xóa nhạc sĩ có mã `idNhacsi = 3` ra khỏi bảng.",
      "answer": "Các câu lệnh SQL hoàn chỉnh:\n\na) Chèn 3 nhạc sĩ mới cùng lúc:\nINSERT INTO nhacsi (tenNhacsi) VALUES \n('Văn Cao'), \n('Trịnh Công Sơn'), \n('Phạm Tuyên');\n\nb) Sửa tên nhạc sĩ có idNhacsi = 2:\nUPDATE nhacsi \nSET tenNhacsi = 'Nhạc sĩ Trịnh Công Sơn' \nWHERE idNhacsi = 2;\n\nc) Xóa nhạc sĩ có idNhacsi = 3:\nDELETE FROM nhacsi \nWHERE idNhacsi = 3;"
    },
    {
      "id": "b21-es3",
      "q": "Tại sao khi thực hiện câu lệnh UPDATE hoặc DELETE trong cơ sở dữ liệu thực tế, mệnh đề WHERE lại đóng vai trò sống còn? Nêu hậu quả nghiêm trọng nếu lập trình viên bất cẩn bỏ quên mệnh đề WHERE.",
      "answer": "1. Vai trò sống còn của mệnh đề WHERE:\n- Mệnh đề WHERE đóng vai trò là 'bộ lọc giới hạn phạm vi tác động' của câu lệnh. Nó chỉ định chính xác bản ghi nào thỏa mãn điều kiện mới bị sửa đổi hoặc bị xóa bỏ.\n\n2. Hậu quả nghiêm trọng nếu bỏ quên mệnh đề WHERE:\n- Với câu lệnh UPDATE: Ví dụ chạy lệnh 'UPDATE taikhoan SET sodu = 0;' (quên WHERE id = 123) sẽ biến toàn bộ số dư tài khoản của tất cả hàng triệu khách hàng trong ngân hàng thành con số 0!\n- Với câu lệnh DELETE: Ví dụ chạy lệnh 'DELETE FROM casi;' (quên WHERE idCasi = 5) sẽ xóa sạch toàn bộ hàng ngàn bản ghi dữ liệu ca sĩ trong bảng, làm rỗng bảng chỉ trong một tích tắc.\n- Trong môi trường doanh nghiệp thực tế, việc bất cẩn quên mệnh đề WHERE có thể làm tê liệt toàn bộ hệ thống kinh doanh, gây thiệt hại tài chính khổng lồ và lập trình viên có thể bị kỷ luật sa thải hoặc truy cứu trách nhiệm."
    },
    {
      "id": "b21-es4",
      "q": "Viết các câu lệnh SQL để truy vấn thông tin trên bảng `casi` đáp ứng các yêu cầu sau:\na) Lấy ra toàn bộ danh sách ca sĩ được sắp xếp theo thứ tự bảng chữ cái của tên ca sĩ.\nb) Đếm tổng số lượng ca sĩ hiện có trong bảng.\nc) Tìm kiếm các ca sĩ có nghệ danh chứa từ 'Minh' (ví dụ: Thu Minh, Quang Minh...).",
      "answer": "Các câu lệnh SQL truy vấn:\n\na) Sắp xếp danh sách ca sĩ theo bảng chữ cái A-Z:\nSELECT * \nFROM casi \nORDER BY tenCasi ASC;\n\nb) Đếm tổng số lượng ca sĩ:\nSELECT COUNT(*) AS TongSoCaSi \nFROM casi;\n\nc) Tìm kiếm ca sĩ có tên chứa từ 'Minh':\nSELECT * \nFROM casi \nWHERE tenCasi LIKE '%Minh%';"
    }
  ]
};
