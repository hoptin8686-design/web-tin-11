import { LessonExtra } from "@/lib/types";

// Bài 23: Thực hành truy xuất dữ liệu qua liên kết các bảng (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b23-tf1",
      "context": "Xét một CSDL âm nhạc gồm 3 bảng: bannhac(idBannhac, tenBannhac, idNhacsi, idCasi), nhacsi(idNhacsi, tenNhacsi), casi(idCasi, tenCasi). Giáo viên yêu cầu học sinh viết truy vấn hiển thị thông tin bài hát.",
      "statements": [
        {
          "text": "Phép nối INNER JOIN giữa bannhac và casi với điều kiện bannhac.idCasi = casi.idCasi sẽ hiển thị cả các ca sĩ chưa từng hát bài hát nào.",
          "answer": false,
          "explain": "Sai. INNER JOIN chỉ lấy các bản ghi có dữ liệu khớp ở cả hai bảng; ca sĩ chưa có bài hát sẽ không xuất hiện."
        },
        {
          "text": "Muốn hiển thị tất cả các ca sĩ kể cả ca sĩ chưa có bài hát, ta cần dùng phép nối LEFT JOIN từ casi sang bannhac.",
          "answer": true,
          "explain": "Đúng. casi LEFT JOIN bannhac giữ lại toàn bộ ca sĩ, ca sĩ chưa có bài hát sẽ có thông tin bài hát là NULL."
        },
        {
          "text": "Để hiển thị đồng thời tên bài hát, tên ca sĩ và tên nhạc sĩ, câu lệnh cần nối 3 bảng qua 2 từ khóa INNER JOIN và 2 điều kiện ON tương ứng.",
          "answer": true,
          "explain": "Đúng. Cứ n bảng cần ít nhất n-1 phép nối có điều kiện ON."
        },
        {
          "text": "Nếu không viết mệnh đề ON trong câu lệnh JOIN, MySQL sẽ tự động đoán trường có tên giống nhau để nối.",
          "answer": false,
          "explain": "Sai. Không có ON, SQL sẽ thực hiện tích Đề-các (Cartesian product) nhân chéo tất cả các dòng."
        }
      ]
    },
    {
      "id": "b23-tf2",
      "context": "Xét câu lệnh SQL sau:\nSELECT ns.tenNhacsi, COUNT(bn.idBannhac) AS soLuongBaiHat\nFROM nhacsi ns\nLEFT JOIN bannhac bn ON ns.idNhacsi = bn.idNhacsi\nGROUP BY ns.idNhacsi\nHAVING COUNT(bn.idBannhac) >= 2\nORDER BY soLuongBaiHat DESC;",
      "statements": [
        {
          "text": "ns và bn trong câu lệnh trên là các bí danh bảng (table aliases) giúp viết mã ngắn gọn.",
          "answer": true,
          "explain": "Đúng. ns thay cho nhacsi và bn thay cho bannhac."
        },
        {
          "text": "Mệnh đề GROUP BY ns.idNhacsi gom các bài hát có cùng tác giả vào chung một nhóm để tính tổng số bài.",
          "answer": true,
          "explain": "Đúng. GROUP BY nhóm dữ liệu theo từng nhạc sĩ."
        },
        {
          "text": "Mệnh đề HAVING COUNT(bn.idBannhac) >= 2 có thể được thay thế hoàn toàn bằng mệnh đề WHERE COUNT(bn.idBannhac) >= 2 đặt trước GROUP BY.",
          "answer": false,
          "explain": "Sai. Không được dùng hàm tổng hợp như COUNT trong mệnh đề WHERE; bắt buộc phải dùng trong HAVING."
        },
        {
          "text": "Kết quả cuối cùng chỉ liệt kê những nhạc sĩ có từ 2 bài hát trở lên và được sắp xếp giảm dần theo số lượng bài hát.",
          "answer": true,
          "explain": "Đúng. HAVING lọc số bài >= 2 và ORDER BY ... DESC sắp xếp từ nhiều xuống ít."
        }
      ]
    },
    {
      "id": "b23-tf3",
      "context": "Học sinh thực hành viết các câu lệnh truy vấn lọc dữ liệu văn bản và số liệu trên phần mềm HeidiSQL.",
      "statements": [
        {
          "text": "Để tìm những bài hát có tên bắt đầu bằng chữ 'Mùa', ta viết điều kiện WHERE tenBannhac LIKE 'Mùa%'.",
          "answer": true,
          "explain": "Đúng. Ký tự '%' ở cuối đại diện cho bất kỳ chuỗi ký tự nào đi sau từ 'Mùa'."
        },
        {
          "text": "Toán tử '=' và toán tử LIKE trong MySQL hoàn toàn giống hệt nhau về chức năng và cách so khớp chuỗi.",
          "answer": false,
          "explain": "Sai. Toán tử '=' so khớp chính xác toàn bộ chuỗi, còn LIKE cho phép so khớp mẫu với ký tự đại diện (% và _)."
        },
        {
          "text": "Để kiểm tra một trường có giá trị rỗng chưa nhập hay không, ta viết WHERE tenCasi = NULL.",
          "answer": false,
          "explain": "Sai. Trong SQL, kiểm tra NULL bắt buộc phải dùng toán tử IS NULL hoặc IS NOT NULL, không dùng phép gán '='."
        },
        {
          "text": "HeidiSQL cho phép lưu câu lệnh truy vấn đã viết thành file văn bản đuôi .sql vào máy tính để tái sử dụng.",
          "answer": true,
          "explain": "Đúng. HeidiSQL hỗ trợ lưu (Save SQL snippet/file) rất tiện lợi."
        }
      ]
    },
    {
      "id": "b23-tf4",
      "context": "Xét về hiệu năng và kết quả trả về của các phép truy vấn liên kết trong hệ QTCSDL quan hệ.",
      "statements": [
        {
          "text": "Mệnh đề SELECT * FROM bannhac INNER JOIN casi ON bannhac.idCasi = casi.idCasi sẽ lấy tất cả các cột của cả hai bảng bannhac và casi.",
          "answer": true,
          "explain": "Đúng. Ký tự đại diện '*' sẽ lấy toàn bộ các trường của tất cả các bảng tham gia nối."
        },
        {
          "text": "Trong các ứng dụng thực tế chuyên nghiệp, việc luôn luôn dùng SELECT * thay vì chỉ định tên cột cụ thể là phương pháp tối ưu nhất.",
          "answer": false,
          "explain": "Sai. Dùng SELECT * gây lãng phí băng thông mạng và tài nguyên bộ nhớ; chỉ nên chọn đúng các cột cần dùng."
        },
        {
          "text": "Chỉ mục (Index) trên khóa chính và khóa ngoại giúp các phép nối bảng (JOIN) thực thi nhanh hơn rõ rệt khi lượng dữ liệu lớn.",
          "answer": true,
          "explain": "Đúng. Index giúp giảm chi phí tìm kiếm từ O(N) xuống O(log N) trên các bản ghi liên kết."
        },
        {
          "text": "Từ khóa DISTINCT có thể đặt sau WHERE để lọc bản ghi trùng lặp.",
          "answer": false,
          "explain": "Sai. Từ khóa DISTINCT được đặt ngay sau SELECT (ví dụ SELECT DISTINCT cot FROM ...)."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b23-es1",
      "q": "Nêu sự khác biệt cơ bản giữa phép nối INNER JOIN và LEFT JOIN trong truy xuất dữ liệu CSDL.",
      "answer": "- INNER JOIN (nối trong): Chỉ trả về các bản ghi thỏa mãn điều kiện nối (có dữ liệu khớp ở cả hai bảng).\n- LEFT JOIN (nối trái): Trả về toàn bộ các bản ghi của bảng bên trái, kể cả khi không tìm thấy bản ghi tương ứng ở bảng bên phải (khi đó các cột từ bảng bên phải sẽ mang giá trị NULL)."
    },
    {
      "id": "b23-es2",
      "q": "Viết câu lệnh SQL hiển thị tên bài hát (tenBannhac) và tên nhạc sĩ sáng tác (tenNhacsi) tương ứng từ hai bảng bannhac và nhacsi.",
      "answer": "SELECT bannhac.tenBannhac, nhacsi.tenNhacsi\nFROM bannhac\nINNER JOIN nhacsi ON bannhac.idNhacsi = nhacsi.idNhacsi;"
    },
    {
      "id": "b23-es3",
      "q": "Tại sao không thể sử dụng hàm tổng hợp COUNT() trong mệnh đề WHERE? Cần dùng mệnh đề nào để lọc kết quả của hàm tổng hợp?",
      "answer": "Vì mệnh đề WHERE được thực thi trước khi các bản ghi được gom nhóm, nó chỉ có thể kiểm tra từng dòng đơn lẻ. Để lọc kết quả tính toán của hàm tổng hợp (như COUNT, SUM, AVG) sau khi đã gom nhóm bằng GROUP BY, ta bắt buộc phải sử dụng mệnh đề HAVING."
    },
    {
      "id": "b23-es4",
      "q": "Viết câu lệnh SQL đếm số lượng bài hát của mỗi ca sĩ, hiển thị tên ca sĩ (tenCasi) và số bài hát tương ứng.",
      "answer": "SELECT casi.tenCasi, COUNT(bannhac.idBannhac) AS soBaiHat\nFROM casi\nINNER JOIN bannhac ON casi.idCasi = bannhac.idCasi\nGROUP BY casi.idCasi, casi.tenCasi;"
    }
  ]
};
