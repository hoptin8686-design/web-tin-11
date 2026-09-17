import { Question } from "@/lib/types";

// Bài 1: Hệ điều hành
export const questions: Question[] = [
  {
    "id": "b1-01",
    "q": "Hệ điều hành (Operating System) là gì?",
    "options": [
      "Phần mềm hệ thống quản lý tài nguyên máy tính và cung cấp môi trường chạy ứng dụng",
      "Phần mềm ứng dụng dùng để soạn thảo văn bản và tính toán bảng tính",
      "Thiết bị phần cứng trung tâm điều khiển các vi mạch bên trong máy tính",
      "Tập hợp các tệp văn bản hướng dẫn người dùng vận hành thiết bị số"
    ],
    "answer": 0,
    "explain": "Hệ điều hành là phần mềm hệ thống quan trọng nhất, quản lý phần cứng, tài nguyên phần mềm và cung cấp môi trường cho các chương trình ứng dụng hoạt động."
  },
  {
    "id": "b1-02",
    "q": "Theo chương trình Tin học 11, hệ điều hành đóng vai trò là lớp trung gian giữa:",
    "options": [
      "Phần mềm ứng dụng và phần cứng máy tính",
      "Màn hình máy tính và chuột bàn phím",
      "Mạng Internet và nhà cung cấp dịch vụ mạng",
      "Người lập trình viên và người sử dụng máy tính"
    ],
    "answer": 0,
    "explain": "Trong mô hình ba tầng của hệ thống máy tính, hệ điều hành đứng ở giữa làm cầu nối điều phối phần cứng cho phần mềm ứng dụng sử dụng."
  },
  {
    "id": "b1-03",
    "q": "Chức năng nào sau đây KHÔNG PHẢI là chức năng cốt lõi của hệ điều hành?",
    "options": [
      "Tự động biên tập nội dung video và xuất bản phim hoạt hình",
      "Quản lý bộ nhớ trong (RAM) và bộ vi xử lý (CPU)",
      "Quản lý tệp và tổ chức cấu trúc thư mục trên ổ đĩa",
      "Cung cấp giao diện tương tác giữa người dùng và máy tính"
    ],
    "answer": 0,
    "explain": "Biên tập video là nhiệm vụ của phần mềm ứng dụng chuyên biệt, không phải chức năng cốt lõi của hệ điều hành."
  },
  {
    "id": "b1-04",
    "q": "Giao diện đồ họa người dùng (GUI) lần đầu tiên được phổ biến rộng rãi tới người dùng cá nhân qua phiên bản Windows nào?",
    "options": [
      "Windows 95",
      "MS-DOS 1.0",
      "Windows 3.1",
      "Windows Server 2003"
    ],
    "answer": 0,
    "explain": "Windows 95 đánh dấu bước chuyển mình mang tính lịch sử với giao diện GUI hoàn chỉnh gồm nút Start, thanh Taskbar và cơ chế Plug & Play."
  },
  {
    "id": "b1-05",
    "q": "Hệ điều hành Linux có nguồn gốc ban đầu từ hệ điều hành nào?",
    "options": [
      "UNIX",
      "MS-DOS",
      "Mac OS",
      "OS/2"
    ],
    "answer": 0,
    "explain": "Linux được Linus Torvalds phát triển dựa trên nguyên lý kiến trúc của hệ điều hành UNIX - hệ điều hành đa nhiệm, đa người dùng nổi tiếng."
  },
  {
    "id": "b1-06",
    "q": "Hệ điều hành Android chạy trên phần lớn điện thoại thông minh hiện nay được phát triển dựa trên nhân (kernel) nào?",
    "options": [
      "Nhân Linux",
      "Nhân Windows NT",
      "Nhân BSD",
      "Nhân DOS"
    ],
    "answer": 0,
    "explain": "Android được Google phát triển dựa trên nền tảng nhân Linux mã nguồn mở, tùy biến cho các thiết bị di động cảm ứng."
  },
  {
    "id": "b1-07",
    "q": "Hệ điều hành iOS dành riêng cho thiết bị của Apple có đặc điểm nổi bật nào?",
    "options": [
      "Là hệ điều hành mã nguồn đóng, được tối ưu riêng cho phần cứng Apple",
      "Là hệ điều hành mã nguồn mở hoàn toàn miễn phí cho mọi hãng điện thoại",
      "Cho phép người dùng tự do can thiệp và sửa đổi mã nguồn gốc",
      "Chỉ sử dụng giao diện dòng lệnh văn bản đơn giản"
    ],
    "answer": 0,
    "explain": "iOS là hệ điều hành độc quyền mã nguồn đóng của Apple, chỉ cài đặt trên iPhone/iPad và được tối ưu hóa sâu với phần cứng của hãng."
  },
  {
    "id": "b1-08",
    "q": "Điểm khác biệt quan trọng nhất giữa hệ điều hành cho thiết bị di động và hệ điều hành cho máy tính để bàn là:",
    "options": [
      "HĐH di động ưu tiên tối ưu hóa năng lượng pin, giao diện cảm ứng và kết nối không dây",
      "HĐH di động không thể chạy được bất kỳ ứng dụng nào",
      "HĐH di động không có cơ chế quản lý tệp và thư mục",
      "HĐH máy tính để bàn không thể kết nối mạng Internet"
    ],
    "answer": 0,
    "explain": "Thiết bị di động có giới hạn về dung lượng pin và kích thước màn hình nên hệ điều hành phải tối ưu năng lượng, hỗ trợ cảm ứng đa điểm và tích hợp sâu sóng 4G/5G/Wi-Fi/GPS."
  },
  {
    "id": "b1-09",
    "q": "Cơ chế 'Đa nhiệm' (Multitasking) trong hệ điều hành cho phép:",
    "options": [
      "Thực thi nhiều chương trình hoặc tiến trình gần như đồng thời",
      "Một máy tính kết nối đồng thời với hàng ngàn màn hình",
      "Một người dùng sở hữu nhiều máy tính cùng một lúc",
      "Bộ nhớ RAM lưu trữ dữ liệu vĩnh viễn không bao giờ mất"
    ],
    "answer": 0,
    "explain": "Đa nhiệm (Multitasking) là khả năng của hệ điều hành phân chia thời gian xử lý của CPU để chạy đồng thời nhiều chương trình cùng lúc."
  },
  {
    "id": "b1-10",
    "q": "Thành phần nào sau đây trong hệ thống máy tính trực tiếp chuyển đổi các yêu cầu từ hệ điều hành thành tín hiệu điều khiển phần cứng chuyên biệt?",
    "options": [
      "Trình điều khiển thiết bị (Device Driver)",
      "Trình duyệt web",
      "Phần mềm diệt virus",
      "Bộ gõ tiếng Việt"
    ],
    "answer": 0,
    "explain": "Trình điều khiển thiết bị (Driver) là phần mềm đặc biệt giúp hệ điều hành hiểu và điều khiển trực tiếp từng phần cứng cụ thể (card đồ họa, máy in, card âm thanh...)."
  },
  {
    "id": "b1-11",
    "q": "Hệ điều hành Windows thuộc loại hệ điều hành nào sau đây?",
    "options": [
      "Hệ điều hành thương mại, mã nguồn đóng",
      "Hệ điều hành mã nguồn mở, tự do phân phối lại",
      "Hệ điều hành công cộng không có bản quyền",
      "Hệ điều hành chỉ dành riêng cho máy chủ siêu máy tính"
    ],
    "answer": 0,
    "explain": "Windows do tập đoàn Microsoft giữ bản quyền thương mại, mã nguồn đóng, người dùng phải mua bản quyền sử dụng hợp pháp."
  },
  {
    "id": "b1-12",
    "q": "Bản phân phối (Distro) nào sau đây là của hệ điều hành Linux?",
    "options": [
      "Ubuntu, Fedora, Debian",
      "macOS, iOS, iPadOS",
      "Windows 10, Windows 11",
      "MS-DOS, PC-DOS"
    ],
    "answer": 0,
    "explain": "Ubuntu, Fedora, Debian, RedHat, CentOS là các bản phân phối phổ biến được xây dựng trên nền tảng nhân Linux."
  },
  {
    "id": "b1-13",
    "q": "Khái niệm 'Plug and Play' (PnP) của hệ điều hành mang lại ý nghĩa gì cho người dùng?",
    "options": [
      "Tự động nhận diện thiết bị ngoại vi khi cắm vào máy tính mà không cần cấu hình phức tạp",
      "Tự động tải trò chơi điện tử về máy tính khi bật nguồn",
      "Tăng dung lượng RAM ảo lên gấp đôi mà không tốn chi phí",
      "Chống hoàn toàn các loại virus xâm nhập từ USB"
    ],
    "answer": 0,
    "explain": "Plug and Play (Cắm và Chạy) là công nghệ cho phép hệ điều hành tự động nhận dạng, nạp driver và thiết lập thiết bị ngoại vi khi người dùng cắm vào máy."
  },
  {
    "id": "b1-14",
    "q": "Khi khởi động máy tính, chương trình nạp hệ điều hành được kích hoạt từ đâu đầu tiên?",
    "options": [
      "Chương trình khởi động trong ROM (BIOS/UEFI)",
      "Từ phần mềm Microsoft Word trên màn hình",
      "Từ thẻ nhớ điện thoại cắm ngoài qua cổng USB",
      "Từ một trang web trực tuyến trên Internet"
    ],
    "answer": 0,
    "explain": "Khi bật máy tính, vi mạch BIOS/UEFI trong ROM kiểm tra phần cứng (POST) sau đó tìm kiếm bản ghi khởi động (Bootloader) để nạp hệ điều hành vào RAM."
  },
  {
    "id": "b1-15",
    "q": "Giao diện dòng lệnh (CLI - Command Line Interface) có đặc điểm nào sau đây?",
    "options": [
      "Người dùng tương tác bằng cách gõ các câu lệnh dạng văn bản",
      "Người dùng thao tác bằng cách bấm chuột vào các biểu tượng đồ họa",
      "Chỉ sử dụng được khi màn hình có hỗ trợ cảm ứng đa điểm",
      "Bắt buộc phải có kết nối mạng Internet mới hoạt động được"
    ],
    "answer": 0,
    "explain": "Giao diện dòng lệnh (CLI - Command Line Interface) yêu cầu người dùng gõ lệnh văn bản từ bàn phím (ví dụ CMD, PowerShell trong Windows, Terminal trong Linux)."
  },
  {
    "id": "b1-16",
    "q": "Một tiến trình (Process) trong hệ điều hành được định nghĩa là:",
    "options": [
      "Một chương trình đang trong trạng thái được thực thi trong bộ nhớ",
      "Một tệp tin văn bản được lưu trữ tĩnh trên đĩa cứng",
      "Một sợi cáp nối giữa bàn phím và thùng máy",
      "Một phím bấm chức năng trên bàn phím máy tính"
    ],
    "answer": 0,
    "explain": "Tiến trình (Process) là một thực thể đang thực thi của một chương trình, bao gồm mã lệnh, bộ nhớ được cấp phát và ngữ cảnh xử lý hiện tại của CPU."
  },
  {
    "id": "b1-17",
    "q": "Tệp tin trong hệ điều hành Windows được phân biệt định dạng dựa vào yếu tố nào?",
    "options": [
      "Phần mở rộng của tệp (File Extension) sau dấu chấm",
      "Màu sắc của thùng máy tính",
      "Dung lượng của thanh RAM máy tính",
      "Tốc độ vòng quay của quạt làm mát CPU"
    ],
    "answer": 0,
    "explain": "Phần mở rộng của tệp (ví dụ .docx, .exe, .mp4, .pdf) cho hệ điều hành biết định dạng của tệp và ứng dụng phù hợp để mở tệp đó."
  },
  {
    "id": "b1-18",
    "q": "Hệ điều hành quản lý bộ nhớ trong (RAM) bằng phương thức chủ yếu nào?",
    "options": [
      "Phân chia không gian nhớ, cấp phát và thu hồi vùng nhớ cho các tiến trình",
      "Tự động xóa sạch toàn bộ dữ liệu trên ổ cứng sau mỗi 30 phút",
      "Gửi toàn bộ dữ liệu của RAM lên mạng xã hội để sao lưu",
      "Hạ thấp điện áp nguồn máy tính để tiết kiệm tiền điện"
    ],
    "answer": 0,
    "explain": "HĐH theo dõi tình trạng từng byte nhớ, cấp phát cho các tiến trình khi có nhu cầu và thu hồi lại khi tiến trình kết thúc để tránh lãng phí tài nguyên."
  },
  {
    "id": "b1-19",
    "q": "Bộ nhớ ảo (Virtual Memory) là kỹ thuật của hệ điều hành nhằm:",
    "options": [
      "Sử dụng một phần dung lượng ổ đĩa làm phần mở rộng tạm thời cho bộ nhớ RAM",
      "Tạo ra hình ảnh 3D sống động trên kính thực tế ảo",
      "Tăng tốc độ xung nhịp của CPU lên mức tối đa",
      "Nhân bản số lượng vi mạch vật lý bên trong thùng máy"
    ],
    "answer": 0,
    "explain": "Bộ nhớ ảo cho phép máy tính mô phỏng bộ nhớ RAM bằng cách chuyển tạm thời các trang nhớ ít dùng sang một tệp hoán đổi (paging file) trên ổ cứng."
  },
  {
    "id": "b1-20",
    "q": "Hệ thống tệp (File System) phổ biến nhất trên các phiên bản Windows hiện đại là:",
    "options": [
      "NTFS",
      "FAT16",
      "Ext4",
      "APFS"
    ],
    "answer": 0,
    "explain": "NTFS (New Technology File System) là hệ thống tệp mặc định và tối ưu trên Windows, hỗ trợ bảo mật cao, nén dữ liệu và phân quyền chặt chẽ."
  },
  {
    "id": "b1-21",
    "q": "Phần mềm nào sau đây là phần mềm tiện ích đi kèm của hệ điều hành?",
    "options": [
      "Disk Cleanup, File Explorer, Task Manager",
      "Adobe Premiere, Corel Draw, Blender",
      "Microsoft Word, Microsoft Excel, Microsoft Access",
      "Google Chrome, Mozilla Firefox, Opera"
    ],
    "answer": 0,
    "explain": "Disk Cleanup, File Explorer, Task Manager là các tiện ích hệ thống tích hợp sẵn trong hệ điều hành Windows để quản lý và dọn dẹp hệ thống."
  },
  {
    "id": "b1-22",
    "q": "Khi người dùng ấn tổ hợp phím Ctrl + Alt + Delete trong Windows, chức năng chính thường được dùng là:",
    "options": [
      "Mở màn hình tùy chọn bảo mật để khóa máy, đổi mật khẩu hoặc mở Task Manager",
      "Tắt nguồn máy tính ngay lập tức mà không lưu dữ liệu",
      "Xóa vĩnh viễn toàn bộ hệ điều hành khỏi ổ cứng",
      "Tự động tăng gấp đôi tốc độ đường truyền mạng"
    ],
    "answer": 0,
    "explain": "Tổ hợp phím này kích hoạt ngắt phần cứng đặc biệt, đưa người dùng vào màn hình bảo mật để mở Task Manager, khóa máy hoặc chuyển tài khoản."
  },
  {
    "id": "b1-23",
    "q": "Cơ chế bảo vệ dữ liệu 'User Account Control' (UAC) trên Windows có tác dụng:",
    "options": [
      "Yêu cầu người dùng xác nhận hoặc cấp quyền Admin trước khi một chương trình thay đổi hệ thống",
      "Ngăn cấm hoàn toàn việc cài đặt phần mềm mới vào máy tính",
      "Tự động gửi ảnh đại diện của người dùng lên trang web công cộng",
      "Giảm dung lượng tệp tin văn bản xuống còn một nửa"
    ],
    "answer": 0,
    "explain": "UAC ngăn chặn các phần mềm độc hại âm thầm cài đặt hoặc tự ý sửa đổi cài đặt hệ thống bằng cách hiển thị hộp thoại xác nhận quyền quản trị viên."
  },
  {
    "id": "b1-24",
    "q": "Vì sao máy tính cần có hệ điều hành trước khi cài đặt các phần mềm ứng dụng?",
    "options": [
      "Vì phần mềm ứng dụng cần các dịch vụ và giao diện chuẩn của hệ điều hành để tương tác với phần cứng",
      "Vì phần cứng máy tính không thể dẫn điện nếu chưa cài hệ điều hành",
      "Vì các hãng sản xuất phần cứng cấm người dùng bật máy tính nếu chưa mua Windows",
      "Vì màn hình máy tính chỉ hiển thị được màu đen nếu thiếu ứng dụng"
    ],
    "answer": 0,
    "explain": "Hệ điều hành cung cấp các hàm API chuẩn hóa để phần mềm ứng dụng giao tiếp với CPU, RAM, ổ đĩa và màn hình mà không cần lập trình trực tiếp cho từng loại mạch điện."
  }
];
