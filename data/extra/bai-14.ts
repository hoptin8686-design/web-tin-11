import { LessonExtra } from "@/lib/types";

// Bài 14: SQL – Ngôn ngữ truy vấn có cấu trúc (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b14-tf1",
      "context": "Cho bảng HOC_SINH gồm các cột (MaHS, HoTen, NgaySinh, GioiTinh, QueQuan, DiemTB). Giáo viên yêu cầu học sinh viết các câu lệnh SQL để truy vấn thông tin:",
      "statements": [
        {
          "text": "a) Câu lệnh 'SELECT * FROM HOC_SINH WHERE QueQuan = 'Cao Bằng';' sẽ trả về tất cả các cột của các học sinh có quê quán tại Cao Bằng.",
          "answer": true,
          "explain": "Đúng. Cú pháp chuẩn lọc học sinh theo quê quán."
        },
        {
          "text": "b) Dấu sao (*) trong câu lệnh SELECT bắt buộc máy tính phải nhân đôi toàn bộ điểm số của học sinh.",
          "answer": false,
          "explain": "Sai. Dấu sao (*) là ký hiệu đại diện cho tất cả các cột của bảng."
        },
        {
          "text": "c) Mệnh đề 'ORDER BY DiemTB DESC' sẽ sắp xếp kết quả danh sách học sinh theo thứ tự điểm trung bình giảm dần từ cao xuống thấp.",
          "answer": true,
          "explain": "Đúng. Từ khóa DESC sắp xếp giảm dần."
        },
        {
          "text": "d) Trong câu lệnh SELECT, mệnh đề WHERE bắt buộc phải đứng trước mệnh đề FROM.",
          "answer": false,
          "explain": "Sai. Thứ tự chuẩn bắt buộc là: SELECT ... FROM ... WHERE ... ORDER BY ... (FROM phải đứng trước WHERE)."
        }
      ]
    },
    {
      "id": "b14-tf2",
      "context": "Về các thao tác cập nhật dữ liệu (DML) trong SQL:",
      "statements": [
        {
          "text": "a) Câu lệnh 'INSERT INTO' được dùng để thêm một bản ghi mới vào bảng.",
          "answer": true,
          "explain": "Đúng. INSERT INTO là lệnh chèn bản ghi mới."
        },
        {
          "text": "b) Nếu chạy câu lệnh 'DELETE FROM HOC_SINH;' mà không có mệnh đề WHERE, toàn bộ các bản ghi trong bảng sẽ bị xóa sạch.",
          "answer": true,
          "explain": "Đúng. Thiếu WHERE sẽ xóa toàn bộ các hàng trong bảng."
        },
        {
          "text": "c) Câu lệnh UPDATE cho phép chỉnh sửa giá trị của một hoặc nhiều cột cho các bản ghi thỏa mãn điều kiện.",
          "answer": true,
          "explain": "Đúng. Cú pháp: UPDATE ... SET ... WHERE ..."
        },
        {
          "text": "d) Câu lệnh DELETE FROM và câu lệnh DROP TABLE có tác dụng hoàn toàn giống hệt nhau.",
          "answer": false,
          "explain": "Sai. DELETE chỉ xóa dữ liệu bên trong các hàng (giữ lại cấu trúc bảng); còn DROP TABLE xóa sổ hoàn toàn cả cấu trúc bảng khỏi CSDL."
        }
      ]
    },
    {
      "id": "b14-tf3",
      "context": "Về các hàm tổng hợp và mệnh đề nhóm dữ liệu trong SQL:",
      "statements": [
        {
          "text": "a) Hàm COUNT(*) đếm tổng số lượng bản ghi thỏa mãn điều kiện của câu truy vấn.",
          "answer": true,
          "explain": "Đúng. COUNT(*) trả về số dòng kết quả."
        },
        {
          "text": "b) Hàm AVG(DiemTB) có thể tính được giá trị trung bình trên một cột kiểu chuỗi ký tự văn bản (Text).",
          "answer": false,
          "explain": "Sai. Hàm AVG chỉ tính toán được trên các cột dữ liệu kiểu số."
        },
        {
          "text": "c) Mệnh đề GROUP BY thường được sử dụng kết hợp với các hàm tổng hợp như COUNT, SUM, AVG để thống kê dữ liệu theo từng nhóm.",
          "answer": true,
          "explain": "Đúng. GROUP BY phân nhóm để tính toán tổng hợp."
        },
        {
          "text": "d) Muốn lọc kết quả sau khi đã thực hiện gom nhóm bằng GROUP BY, ta bắt buộc phải sử dụng mệnh đề HAVING chứ không dùng WHERE.",
          "answer": true,
          "explain": "Đúng. HAVING lọc trên kết quả tổng hợp của nhóm; WHERE lọc trên từng hàng đơn lẻ trước khi nhóm."
        }
      ]
    },
    {
      "id": "b14-tf4",
      "context": "Về cú pháp so khớp chuỗi và liên kết bảng trong SQL:",
      "statements": [
        {
          "text": "a) Điều kiện 'WHERE HoTen LIKE 'Trần%'' sẽ tìm tất cả các học sinh có họ là Trần.",
          "answer": true,
          "explain": "Đúng. 'Trần%' khớp với mọi chuỗi bắt đầu bằng chữ 'Trần'."
        },
        {
          "text": "b) Từ khóa DISTINCT trong câu lệnh SELECT giúp loại bỏ các dòng kết quả trùng lặp.",
          "answer": true,
          "explain": "Đúng. DISTINCT trả về tập các giá trị duy nhất không lặp lại."
        },
        {
          "text": "c) Mệnh đề INNER JOIN cho phép liên kết dữ liệu từ hai bảng dựa trên sự trùng khớp giá trị giữa cột khóa ngoài và khóa chính.",
          "answer": true,
          "explain": "Đúng. INNER JOIN là phép kết nối quan hệ cơ bản nhất."
        },
        {
          "text": "d) Ngôn ngữ SQL chỉ sử dụng được riêng trên phần mềm Microsoft Access, không chạy được trên MySQL.",
          "answer": false,
          "explain": "Sai. SQL là ngôn ngữ tiêu chuẩn chung của toàn bộ các hệ quản trị CSDL quan hệ (MySQL, PostgreSQL, Oracle, SQL Server...)."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b14-es1",
      "q": "Nêu cấu trúc tổng quát của câu lệnh truy vấn SELECT trong SQL và giải thích ý nghĩa của 5 mệnh đề cơ bản: SELECT, FROM, WHERE, GROUP BY, ORDER BY.",
      "answer": "1. Cấu trúc tổng quát của câu lệnh SELECT:\nSELECT [DISTINCT] <danh_sách_cột / hàm_tổng_hợp>\nFROM <tên_bảng_1> [JOIN <tên_bảng_2> ON <điều_kiện_kết_nối>]\nWHERE <điều_kiện_lọc_hàng>\nGROUP BY <cột_nhóm>\nHAVING <điều_kiện_lọc_nhóm>\nORDER BY <cột_sắp_xếp> [ASC / DESC];\n\n2. Ý nghĩa của 5 mệnh đề cơ bản:\n- SELECT: Chỉ định danh sách các cột thuộc tính hoặc các phép tính toán cần trích xuất hiển thị trong kết quả (dùng dấu * để lấy tất cả các cột).\n- FROM: Chỉ định nguồn gốc dữ liệu - tên của một hoặc nhiều bảng lưu trữ dữ liệu cần truy vấn.\n- WHERE: Thiết lập các điều kiện lọc logic để chỉ giữ lại các hàng dữ liệu thỏa mãn điều kiện trước khi xử lý tiếp.\n- GROUP BY: Gom nhóm các hàng có cùng giá trị ở một hoặc nhiều cột lại với nhau để thực hiện các hàm tính toán tổng hợp (như COUNT, SUM, AVG).\n- ORDER BY: Sắp xếp thứ tự hiển thị của các hàng kết quả theo thứ tự tăng dần (ASC - mặc định) hoặc giảm dần (DESC)."
    },
    {
      "id": "b14-es2",
      "q": "Cho bảng dữ liệu HOC_SINH gồm các cột: MaHS (VARCHAR), HoTen (VARCHAR), GioiTinh (VARCHAR), QueQuan (VARCHAR), DiemTB (DECIMAL). Hãy viết các câu lệnh SQL hoàn chỉnh thực hiện các yêu cầu sau:\na) Lấy ra danh sách gồm Họ tên và Điểm trung bình của tất cả học sinh nữ có điểm trung bình từ 8.0 trở lên.\nb) Sắp xếp danh sách toàn bộ học sinh theo thứ tự Điểm trung bình giảm dần.",
      "answer": "Các câu lệnh SQL hoàn chỉnh:\n\na) Lấy danh sách học sinh nữ có ĐiểmTB >= 8.0:\nSELECT HoTen, DiemTB\nFROM HOC_SINH\nWHERE GioiTinh = 'Nữ' AND DiemTB >= 8.0;\n\nb) Sắp xếp toàn bộ học sinh theo ĐiểmTB giảm dần:\nSELECT *\nFROM HOC_SINH\nORDER BY DiemTB DESC;"
    },
    {
      "id": "b14-es3",
      "q": "Phân biệt sự khác nhau giữa hai câu lệnh: 'DELETE FROM HOC_SINH WHERE MaHS = 'HS01';' và 'DROP TABLE HOC_SINH;'. Khi nào người dùng sử dụng từng câu lệnh?",
      "answer": "Phân biệt DELETE FROM và DROP TABLE:\n1. Câu lệnh 'DELETE FROM HOC_SINH WHERE MaHS = 'HS01';':\n- Bản chất: Là câu lệnh thuộc nhóm DML (Thao tác dữ liệu).\n- Tác dụng: Chỉ xóa duy nhất một bản ghi (hàng) của học sinh có mã 'HS01' ra khỏi bảng; cấu trúc bảng HOC_SINH và toàn bộ các hàng dữ liệu của các học sinh khác vẫn còn nguyên vẹn.\n- Tình huống dùng: Khi học sinh HS01 chuyển trường hoặc thôi học, cần xóa thông tin cá nhân khỏi danh sách lớp.\n\n2. Câu lệnh 'DROP TABLE HOC_SINH;':\n- Bản chất: Là câu lệnh thuộc nhóm DDL (Định nghĩa dữ liệu).\n- Tác dụng: Xóa sổ vĩnh viễn và hoàn toàn cả cấu trúc bảng HOC_SINH cùng toàn bộ tất cả các bản ghi dữ liệu bên trong ra khỏi cơ sở dữ liệu. Bảng HOC_SINH sẽ không còn tồn tại trong hệ thống nữa.\n- Tình huống dùng: Khi kết thúc một dự án hoặc tái cấu trúc lại toàn bộ hệ thống CSDL và bảng đó hoàn toàn không còn nhu cầu sử dụng nữa."
    },
    {
      "id": "b14-es4",
      "q": "Viết câu lệnh SQL sử dụng hàm tổng hợp COUNT() và mệnh đề GROUP BY để đếm số lượng học sinh của từng quê quán trong bảng HOC_SINH. Giải thích kết quả đầu ra nhận được.",
      "answer": "1. Câu lệnh SQL:\nSELECT QueQuan, COUNT(*) AS SoLuongHocSinh\nFROM HOC_SINH\nGROUP BY QueQuan;\n\n2. Giải thích cơ chế hoạt động và kết quả đầu ra:\n- Mệnh đề 'GROUP BY QueQuan': Hệ thống sẽ quét toàn bộ bảng HOC_SINH và gom các học sinh có cùng giá trị quê quán vào chung một nhóm (ví dụ: nhóm 'Cao Bằng', nhóm 'Hà Nội', nhóm 'Bắc Kạn').\n- Hàm 'COUNT(*) AS SoLuongHocSinh': Tính tổng số lượng hàng (học sinh) thuộc về mỗi nhóm quê quán và đặt tên tiêu đề cột kết quả là 'SoLuongHocSinh'.\n- Kết quả đầu ra: Là một bảng thống kê gồm 2 cột: Cột 1 là tên từng Quê quán (không bị lặp lại), Cột 2 là con số tương ứng đếm số học sinh thuộc quê quán đó."
    }
  ]
};
