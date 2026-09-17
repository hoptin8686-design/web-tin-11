import { Question } from "@/lib/types";

// Bài 24: Thực hành: Sao lưu dữ liệu
export const questions: Question[] = [
  {
    "id": "b24-01",
    "q": "Sao lưu dữ liệu (Database Backup) là quá trình gì?",
    "options": [
      "Xóa dữ liệu cũ để giải phóng bộ nhớ cho máy tính",
      "Tạo bản sao dữ liệu của CSDL ra nơi lưu trữ an toàn để có thể phục hồi lại khi xảy ra sự cố",
      "Đổi tên cơ sở dữ liệu sang tiếng Anh",
      "Chuyển toàn bộ dữ liệu thành file ảnh PNG"
    ],
    "answer": 1,
    "explain": "Sao lưu là việc tạo bản sao dự phòng để đề phòng rủi ro mất mát dữ liệu do hỏng phần cứng, phần mềm hoặc thao tác sai sót."
  },
  {
    "id": "b24-02",
    "q": "Trong hệ QTCSDL quan hệ MySQL/MariaDB, định dạng file phổ biến nhất dùng để chứa bản sao lưu CSDL là gì?",
    "options": [
      "File thực thi .exe",
      "File kịch bản văn bản chứa câu lệnh SQL (.sql)",
      "File trình chiếu .pptx",
      "File âm thanh .mp3"
    ],
    "answer": 1,
    "explain": "Bản sao lưu CSDL thường được xuất thành file văn bản .sql (SQL dump) chứa các lệnh DROP, CREATE TABLE, INSERT INTO."
  },
  {
    "id": "b24-03",
    "q": "Trong phần mềm HeidiSQL, tính năng sao lưu CSDL được thực hiện qua chức năng nào?",
    "options": [
      "File -> Print",
      "Chuột phải vào tên CSDL -> Chọn 'Export database as SQL' (Xuất CSDL dưới dạng SQL)",
      "Tools -> Calculator",
      "View -> Fullscreen"
    ],
    "answer": 1,
    "explain": "Trong HeidiSQL, người dùng nhấp chuột phải vào CSDL cần sao lưu và chọn 'Export database as SQL'."
  },
  {
    "id": "b24-04",
    "q": "Khi xuất kịch bản sao lưu SQL, tùy chọn nào cho phép xuất cả khung định nghĩa cấu trúc bảng lẫn toàn bộ dữ liệu bên trong?",
    "options": [
      "Structure only",
      "Data only",
      "Structure + Data (hoặc Create + Insert)",
      "Drop only"
    ],
    "answer": 2,
    "explain": "Xuất trọn vẹn cần chọn cả Structure (cấu trúc) và Data (dữ liệu các hàng) để có thể phục hồi nguyên vẹn CSDL."
  },
  {
    "id": "b24-05",
    "q": "Câu lệnh nào thường xuất hiện ở đầu kịch bản phục hồi để tránh lỗi khi bảng cần tạo đã tồn tại sẵn trong CSDL?",
    "options": [
      "CREATE TABLE IF NOT EXISTS hoặc DROP TABLE IF EXISTS",
      "SHUTDOWN DATABASE",
      "DELETE ALL TABLES",
      "RENAME DATABASE"
    ],
    "answer": 0,
    "explain": "DROP TABLE IF EXISTS xóa bảng cũ nếu đã tồn tại, hoặc CREATE TABLE IF NOT EXISTS chỉ tạo bảng khi chưa có để tránh lỗi trùng lặp."
  },
  {
    "id": "b24-06",
    "q": "Trong cửa sổ xuất SQL của HeidiSQL, mục 'Output' (Đầu ra) cung cấp những lựa chọn lưu trữ nào?",
    "options": [
      "Chỉ lưu vào ổ đĩa mềm",
      "File duy nhất (.sql), File nén (.zip), Clipboard hoặc Database khác",
      "Gửi fax trực tiếp",
      "In ra máy in giấy nhiệt"
    ],
    "answer": 1,
    "explain": "HeidiSQL cho phép xuất ra một file .sql duy nhất, file nén zip, sao chép vào bộ nhớ đệm (Clipboard) hoặc đổ trực tiếp vào CSDL khác."
  },
  {
    "id": "b24-07",
    "q": "Phục hồi dữ liệu (Database Restore) là quá trình gì?",
    "options": [
      "Tạo mới hoàn toàn một tài khoản người dùng",
      "Tải và thực thi file kịch bản sao lưu SQL để tái tạo lại cấu trúc và dữ liệu CSDL như thời điểm sao lưu",
      "Định dạng lại ổ đĩa cứng",
      "Cài đặt lại hệ điều hành Windows"
    ],
    "answer": 1,
    "explain": "Restore là khôi phục lại trạng thái CSDL từ bản sao lưu bằng cách thực thi lại file .sql."
  },
  {
    "id": "b24-08",
    "q": "Để nhập (phục hồi) file sao lưu SQL trong HeidiSQL, người dùng thực hiện qua thao tác nào?",
    "options": [
      "Menu File -> Chọn 'Load SQL file...' (hoặc 'Run SQL file...')",
      "Help -> About HeidiSQL",
      "Edit -> Cut",
      "View -> Status bar"
    ],
    "answer": 0,
    "explain": "Vào menu File -> Run SQL file... (hoặc Load SQL file...) để mở và nạp file sao lưu vào hệ thống."
  },
  {
    "id": "b24-09",
    "q": "Điều gì là quan trọng nhất trước khi chạy file phục hồi SQL trên một CSDL đang hoạt động thực tế?",
    "options": [
      "Tăng âm lượng loa máy tính",
      "Sao lưu lại trạng thái hiện tại của CSDL trước khi nạp file phục hồi để tránh mất dữ liệu mới phát sinh",
      "Đổi mật khẩu tài khoản root",
      "Cắm thêm thẻ nhớ ngoài"
    ],
    "answer": 1,
    "explain": "Luôn luôn sao lưu hiện trạng trước khi phục hồi dữ liệu để có đường lui nếu file phục hồi bị lỗi hoặc chứa dữ liệu cũ đè lên dữ liệu mới."
  },
  {
    "id": "b24-10",
    "q": "Công cụ dòng lệnh nổi tiếng của MySQL dùng để sao lưu cơ sở dữ liệu từ console là gì?",
    "options": [
      "mysqldump",
      "mysqlrestore",
      "sqlcopy",
      "backupcli"
    ],
    "answer": 0,
    "explain": "mysqldump là công cụ dòng lệnh tiêu chuẩn được tích hợp sẵn trong MySQL để trích xuất CSDL thành file SQL."
  },
  {
    "id": "b24-11",
    "q": "Cú pháp dòng lệnh mysqldump nào sau đây sao lưu CSDL 'amnhac' thành file 'amnhac_backup.sql'?",
    "options": [
      "mysqldump -u root -p amnhac > amnhac_backup.sql",
      "mysqldump copy amnhac to amnhac_backup.sql",
      "backup database amnhac as amnhac_backup.sql",
      "mysql amnhac < amnhac_backup.sql"
    ],
    "answer": 0,
    "explain": "Cú pháp: mysqldump -u [user] -p [database_name] > [backup_file.sql]."
  },
  {
    "id": "b24-12",
    "q": "Cú pháp dòng lệnh nào sau đây dùng để phục hồi dữ liệu từ file 'amnhac_backup.sql' vào CSDL 'amnhac'?",
    "options": [
      "mysql -u root -p amnhac < amnhac_backup.sql",
      "mysql > amnhac_backup.sql",
      "mysqldump restore amnhac",
      "mysql -u root -p amnhac > amnhac_backup.sql"
    ],
    "answer": 0,
    "explain": "Dấu redirect '<' nạp nội dung file SQL vào công cụ mysql client để thực thi: mysql -u root -p amnhac < amnhac_backup.sql."
  },
  {
    "id": "b24-13",
    "q": "Quy tắc sao lưu 3-2-1 kinh điển trong an toàn dữ liệu bao gồm những yếu tố nào?",
    "options": [
      "3 người quản trị, 2 mật khẩu, 1 máy tính",
      "Ít nhất 3 bản sao dữ liệu, trên 2 loại phương tiện lưu trữ khác nhau, và 1 bản lưu ở địa điểm khác (offsite/đám mây)",
      "Sao lưu trong 3 phút, nghỉ 2 phút, chạy 1 phút",
      "Giữ bản sao lưu trong 3 năm, 2 tháng, 1 ngày"
    ],
    "answer": 1,
    "explain": "Quy tắc 3-2-1: 3 bản sao, 2 phương tiện khác nhau (ví dụ SSD nội bộ và ổ cứng di động), 1 bản ở vị trí cách ly (như đám mây/offsite)."
  },
  {
    "id": "b24-14",
    "q": "Tại sao không nên chỉ lưu bản sao lưu trên chính ổ đĩa cài đặt hệ điều hành và CSDL của máy chủ?",
    "options": [
      "Vì Windows không cho phép lưu file .sql trên ổ C",
      "Vì nếu ổ cứng máy chủ bị hỏng vật lý hoặc bị virus mã hóa (ransomware), cả CSDL gốc lẫn file sao lưu đều sẽ mất",
      "Vì file sao lưu sẽ tự động xóa sau 24 giờ",
      "Vì tốc độ mạng sẽ bị nghẽn"
    ],
    "answer": 1,
    "explain": "Lưu file sao lưu trên cùng ổ cứng với dữ liệu gốc không có tác dụng bảo vệ khi ổ đĩa gặp sự cố hỏng hóc vật lý."
  },
  {
    "id": "b24-15",
    "q": "Bản sao lưu dạng 'Structure only' (chỉ cấu trúc) thường được sử dụng trong tình huống nào?",
    "options": [
      "Khi cần gửi phần mềm mẫu cho lập trình viên khác phát triển mà không làm lộ dữ liệu người dùng thực tế",
      "Khi muốn phục hồi lại toàn bộ bài hát đã bị xóa",
      "Khi cần tính tổng dung lượng file âm thanh",
      "Khi máy tính bị mất điện"
    ],
    "answer": 0,
    "explain": "Sao lưu chỉ cấu trúc (schema/structure) giúp chia sẻ khung dữ liệu cho môi trường thử nghiệm (testing/dev) mà không chứa dữ liệu nhạy cảm."
  },
  {
    "id": "b24-16",
    "q": "Trong file SQL sao lưu, câu lệnh nào chịu trách nhiệm nạp lại các bản ghi dữ liệu vào bảng?",
    "options": [
      "CREATE TABLE",
      "INSERT INTO",
      "SELECT * FROM",
      "ALTER TABLE"
    ],
    "answer": 1,
    "explain": "Các lệnh INSERT INTO ... VALUES (...) chịu trách nhiệm đưa dữ liệu của từng dòng vào bảng khi phục hồi."
  },
  {
    "id": "b24-17",
    "q": "Nếu trong file sao lưu có lệnh 'DROP TABLE IF EXISTS bannhac;', khi phục hồi thì điều gì sẽ xảy ra trước khi tạo lại bảng?",
    "options": [
      "Bảng bannhac cũ (nếu đang tồn tại) sẽ bị xóa bỏ hoàn toàn",
      "Dữ liệu bảng cũ được chuyển sang bảng nhacsi",
      "Hệ thống dừng lại và chờ người dùng gõ mật khẩu",
      "Không có gì xảy ra cả"
    ],
    "answer": 0,
    "explain": "DROP TABLE IF EXISTS sẽ xóa bảng cũ đi để tạo ra bảng hoàn toàn mới, tránh lỗi bảng đã tồn tại."
  },
  {
    "id": "b24-18",
    "q": "Khái niệm 'Sao lưu định kỳ' (Scheduled Backup) mang lại lợi ích gì cho tổ chức?",
    "options": [
      "Giúp tự động sao lưu dữ liệu theo lịch trình định sẵn (hàng ngày, hàng tuần) mà không cần con người thao tác thủ công",
      "Tăng gấp đôi tốc độ xử lý CPU của máy chủ",
      "Miễn phí bản quyền phần mềm",
      "Ngăn ngừa học sinh truy cập mạng xã hội"
    ],
    "answer": 0,
    "explain": "Sao lưu định kỳ tự động hóa công tác bảo vệ dữ liệu, giảm thiểu nguy cơ quên sao lưu do con người."
  },
  {
    "id": "b24-19",
    "q": "Khi phục hồi CSDL từ file SQL sao lưu, nếu gặp thông báo lỗi 'Unknown database amnhac', nguyên nhân là do đâu?",
    "options": [
      "File sao lưu bị nhiễm virus",
      "CSDL đích mang tên 'amnhac' chưa được tạo trên máy chủ trước khi nạp dữ liệu",
      "HeidiSQL phiên bản quá mới",
      "Tên bài hát chứa ký tự tiếng Việt"
    ],
    "answer": 1,
    "explain": "Nếu file SQL không có lệnh CREATE DATABASE, người dùng cần tạo sẵn một CSDL rỗng cùng tên trên máy chủ trước khi phục hồi."
  },
  {
    "id": "b24-20",
    "q": "Để đảm bảo file sao lưu SQL hiển thị đúng tiếng Việt có dấu khi mở bằng bất kỳ trình soạn thảo nào, bảng mã ký tự (Charset) cần chọn là gì?",
    "options": [
      "ASCII",
      "UTF-8 (utf8mb4)",
      "TCVN3",
      "Windows-1252"
    ],
    "answer": 1,
    "explain": "UTF-8 (đặc biệt utf8mb4 trong MySQL) là bảng mã chuẩn quốc tế hỗ trợ đầy đủ tiếng Việt và mọi biểu tượng."
  },
  {
    "id": "b24-21",
    "q": "Sự khác biệt giữa sao lưu toàn phần (Full Backup) và sao lưu gia tăng (Incremental Backup) là gì?",
    "options": [
      "Full Backup sao chép toàn bộ dữ liệu CSDL; Incremental Backup chỉ sao chép phần dữ liệu đã thay đổi kể từ lần sao lưu gần nhất",
      "Full Backup chỉ dùng cho USB, Incremental chỉ dùng cho ổ đĩa cứng",
      "Full Backup chỉ xuất cấu trúc, Incremental chỉ xuất dữ liệu",
      "Không có gì khác nhau"
    ],
    "answer": 0,
    "explain": "Full backup sao chép tất cả, còn Incremental backup chỉ ghi lại các thay đổi mới giúp tiết kiệm thời gian và dung lượng."
  },
  {
    "id": "b24-22",
    "q": "Sau khi xuất file sao lưu thành công trong HeidiSQL, thao tác kiểm tra cơ bản nhất của người quản trị là gì?",
    "options": [
      "Xóa ngay CSDL gốc để kiểm tra",
      "Mở file .sql kiểm tra kích thước file, xem nội dung kịch bản có các lệnh CREATE và INSERT dữ liệu hay không",
      "Tắt máy tính đi ngủ",
      "Đổi phần mở rộng file thành .mp4"
    ],
    "answer": 1,
    "explain": "Kiểm tra kích thước file (không bị 0 byte) và mở xem lướt các lệnh SQL là bước kiểm định an toàn cơ bản."
  },
  {
    "id": "b24-23",
    "q": "Trong HeidiSQL, nếu muốn sao chép nhanh CSDL từ máy chủ nội bộ (localhost) sang một máy chủ khác đang kết nối, tính năng nào hỗ trợ?",
    "options": [
      "Export database as SQL -> Mục Output chọn Database đích trên máy chủ kia",
      "Copy paste file HeidiSQL.exe",
      "Chụp màn hình gửi qua Zalo",
      "Chạy lệnh PING"
    ],
    "answer": 0,
    "explain": "HeidiSQL cho phép chuyển trực tiếp dữ liệu sang một CSDL/Server khác thông qua tùy chọn Server: [tên kết nối] trong mục Output."
  },
  {
    "id": "b24-24",
    "q": "Một thảm họa thường gặp làm mất dữ liệu CSDL doanh nghiệp mà việc sao lưu ngoại vi (offsite backup) giải quyết được là gì?",
    "options": [
      "Màn hình máy tính bị xước nhẹ",
      "Cháy nổ văn phòng, hỏng phần cứng toàn bộ trung tâm dữ liệu hoặc tấn công mã hóa tống tiền (ransomware)",
      "Chuột máy tính hết pin",
      "Quên mật khẩu wifi"
    ],
    "answer": 1,
    "explain": "Các thảm họa nghiêm trọng như hỏa hoạn, ngập lụt, mã độc tống tiền chỉ có thể khắc phục nhờ bản sao lưu độc lập bên ngoài (offsite/cloud)."
  }
];
