import { LessonExtra } from "@/lib/types";

// Bài 1: Hệ điều hành (Đúng/Sai & Tự luận / Trả lời ngắn)
export const extra: LessonExtra = {
  "tf": [
    {
      "id": "b1-tf1",
      "context": "Bạn Minh mua một máy tính xách tay mới và đang phân vân giữa việc cài đặt hệ điều hành Windows 11 (thương mại) hay Ubuntu Linux (mã nguồn mở). Trong buổi thảo luận nhóm Tin học, các bạn đã đưa ra các nhận định sau:",
      "statements": [
        {
          "text": "a) Hệ điều hành đóng vai trò là cầu nối trung gian giữa phần mềm ứng dụng và phần cứng máy tính.",
          "answer": true,
          "explain": "Đúng. Đây là định nghĩa và vai trò cốt lõi của hệ điều hành trong kiến trúc máy tính."
        },
        {
          "text": "b) Minh có thể tải về và cài đặt Ubuntu Linux hoàn toàn miễn phí và hợp pháp mà không cần mua bản quyền thương mại.",
          "answer": true,
          "explain": "Đúng. Linux và bản phân phối Ubuntu được phát hành theo giấy phép mã nguồn mở (GNU GPL) miễn phí."
        },
        {
          "text": "c) Khi máy tính chưa cài đặt bất kỳ hệ điều hành nào, Minh vẫn có thể mở trình duyệt Chrome để học trực tuyến.",
          "answer": false,
          "explain": "Sai. Trình duyệt Chrome là phần mềm ứng dụng, bắt buộc phải chạy trên nền một hệ điều hành đã được khởi động."
        },
        {
          "text": "d) Mọi phần mềm chạy được trên Windows 11 đều có thể chạy trực tiếp trên Ubuntu mà không cần sửa đổi hay dùng trình giả lập.",
          "answer": false,
          "explain": "Sai. Các tệp thực thi .exe của Windows không tương thích trực tiếp với định dạng nhị phân ELF của Linux nếu không qua lớp tương thích (như Wine)."
        }
      ]
    },
    {
      "id": "b1-tf2",
      "context": "Một nhóm học sinh lớp 11 tìm hiểu về sự khác biệt giữa hệ điều hành cho máy tính cá nhân (Desktop OS) và hệ điều hành cho thiết bị di động (Mobile OS như Android, iOS). Nhóm ghi nhận các ý kiến sau:",
      "statements": [
        {
          "text": "a) Hệ điều hành di động được tối ưu sâu để tiết kiệm năng lượng pin và ưu tiên giao diện cảm ứng đa điểm.",
          "answer": true,
          "explain": "Đúng. Do giới hạn nguồn pin và cách tương tác người dùng nên HĐH di động tập trung tối ưu hai đặc tính này."
        },
        {
          "text": "b) Hệ điều hành Android được xây dựng phát triển dựa trên nhân của hệ điều hành Linux.",
          "answer": true,
          "explain": "Đúng. Nhân Linux quản lý phần cứng, bộ nhớ và các trình điều khiển trên thiết bị Android."
        },
        {
          "text": "c) Hệ điều hành iOS của Apple là phần mềm mã nguồn mở cho phép mọi hãng điện thoại tự do cài đặt lên máy của họ.",
          "answer": false,
          "explain": "Sai. iOS là mã nguồn đóng độc quyền của Apple, chỉ chạy trên phần cứng do Apple sản xuất."
        },
        {
          "text": "d) Hệ điều hành di động hiện đại không hỗ trợ tính năng đa nhiệm để tránh làm máy bị nóng.",
          "answer": false,
          "explain": "Sai. Các hệ điều hành di động hiện đại đều hỗ trợ đa nhiệm (vừa phát nhạc ngầm vừa lướt web hoặc định vị bản đồ)."
        }
      ]
    },
    {
      "id": "b1-tf3",
      "context": "Khi học về lịch sử phát triển của hệ điều hành, giáo viên yêu cầu học sinh xác định các mốc phát triển quan trọng của các dòng hệ điều hành phổ biến trên thế giới:",
      "statements": [
        {
          "text": "a) Hệ điều hành MS-DOS trước đây tương tác với người dùng chủ yếu thông qua giao diện dòng lệnh văn bản (CLI).",
          "answer": true,
          "explain": "Đúng. MS-DOS là hệ điều hành đơn nhiệm, người dùng ra lệnh bằng các lệnh văn bản như DIR, COPY, DEL."
        },
        {
          "text": "b) Windows 95 là phiên bản Windows đầu tiên đưa ra giao diện đồ họa GUI với thanh tác vụ Taskbar và nút Start.",
          "answer": true,
          "explain": "Đúng. Windows 95 đã định hình giao diện đồ họa chuẩn mực cho các phiên bản Windows kế tiếp."
        },
        {
          "text": "c) Hệ điều hành UNIX ra đời sau Windows 10 và được thiết kế chỉ cho một người dùng duy nhất.",
          "answer": false,
          "explain": "Sai. UNIX ra đời từ cuối những năm 1960 (rất sớm) và nổi tiếng với kiến trúc đa nhiệm, đa người dùng."
        },
        {
          "text": "d) Linux được Linus Torvalds công bố lần đầu tiên vào năm 1991 dưới hình thức mã nguồn mở.",
          "answer": true,
          "explain": "Đúng. Linus Torvalds đã khởi xướng dự án nhân Linux năm 1991 và kêu gọi cộng đồng toàn cầu cùng hoàn thiện."
        }
      ]
    },
    {
      "id": "b1-tf4",
      "context": "Trong giờ thực hành, bạn Nam tìm hiểu về cơ chế quản lý phần cứng của hệ điều hành và đặt câu hỏi về vai trò của Driver thiết bị (Device Driver):",
      "statements": [
        {
          "text": "a) Driver là phần mềm trung gian giúp hệ điều hành hiểu và điều khiển một thiết bị phần cứng cụ thể.",
          "answer": true,
          "explain": "Đúng. Mỗi thiết bị phần cứng (máy in, card mạng, card màn hình) cần driver tương ứng để HĐH giao tiếp."
        },
        {
          "text": "b) Cơ chế Plug and Play (Cắm và chạy) giúp hệ điều hành tự động nhận dạng và cấu hình thiết bị ngoại vi khi kết nối.",
          "answer": true,
          "explain": "Đúng. PnP giúp loại bỏ các bước cài đặt thủ công phức tạp của các thời kỳ trước."
        },
        {
          "text": "c) Nếu gỡ bỏ hoàn toàn driver âm thanh khỏi hệ điều hành, loa máy tính vẫn phát ra tiếng bình thường nhờ nguồn điện trực tiếp.",
          "answer": false,
          "explain": "Sai. Không có driver, hệ điều hành không thể dịch âm thanh số thành tín hiệu cho chip giải mã âm thanh xử lý."
        },
        {
          "text": "d) Hệ điều hành chỉ quản lý thiết bị đầu ra (màn hình, loa) còn các thiết bị đầu vào (bàn phím, chuột) không thuộc quyền quản lý của nó.",
          "answer": false,
          "explain": "Sai. Hệ điều hành quản lý toàn bộ các thiết bị nhập, xuất, xử lý và lưu trữ của hệ thống máy tính."
        }
      ]
    }
  ],
  "essay": [
    {
      "id": "b1-es1",
      "q": "Nêu 5 nhóm chức năng cơ bản của hệ điều hành máy tính theo SGK Tin học 11.",
      "answer": "Năm nhóm chức năng cơ bản của hệ điều hành:\n1. Quản lý thiết bị phần cứng: điều phối CPU, bộ nhớ, thiết bị ngoại vi và cổng giao tiếp.\n2. Quản lý lưu trữ dữ liệu: tổ chức hệ thống tệp và thư mục trên ổ đĩa, đảm bảo truy cập an toàn.\n3. Tổ chức thực hiện chương trình: cấp phát tài nguyên, tạo môi trường đa nhiệm và giám sát các tiến trình.\n4. Cung cấp giao diện người dùng: giao diện đồ họa (GUI) hoặc dòng lệnh (CLI) giúp người dùng tương tác dễ dàng.\n5. Cung cấp các tiện ích hệ thống: các công cụ hỗ trợ như dọn đĩa, kiểm tra đĩa, nén tệp, quản lý mạng."
    },
    {
      "id": "b1-es2",
      "q": "Giải thích vì sao hệ điều hành đóng vai trò là 'lớp trung gian' trong mô hình phân tầng ba lớp của hệ thống máy tính.",
      "answer": "Trong mô hình ba lớp (Phần cứng -> Hệ điều hành -> Phần mềm ứng dụng -> Người dùng):\n- Phần cứng chỉ gồm các mạch điện tử, vi xử lý và bộ nhớ, chỉ hiểu các tín hiệu điện và mã máy nhị phân phức tạp.\n- Phần mềm ứng dụng cần tài nguyên để hoạt động nhưng không thể tự điều khiển trực tiếp từng vi mạch điện tử khác nhau của nhiều hãng sản xuất.\n- Hệ điều hành đứng ở giữa: ẩn giấu sự phức tạp của phần cứng, cung cấp các hàm giao tiếp chuẩn (API) cho phần mềm ứng dụng, đồng thời điều phối tài nguyên phần cứng một cách tối ưu, an toàn và tránh xung đột."
    },
    {
      "id": "b1-es3",
      "q": "So sánh hai điểm khác biệt nổi bật nhất giữa hệ điều hành máy tính cá nhân (như Windows) và hệ điều hành cho điện thoại di động (như Android/iOS).",
      "answer": "Hai điểm khác biệt nổi bật:\n1. Giao diện và cách tương tác: HĐH máy tính thiết kế tối ưu cho chuột, bàn phím cơ và màn hình lớn với nhiều cửa sổ xếp chồng; HĐH di động tối ưu cho màn hình cảm ứng chạm vuốt đa điểm, cử chỉ vuốt và kích thước nhỏ gọn.\n2. Quản lý năng lượng và kết nối: HĐH di động đặc biệt ưu tiên cơ chế ngủ sâu (sleep mode) để kéo dài thời lượng pin, tích hợp sâu và liên tục các kết nối không dây (4G/5G, Wi-Fi, Bluetooth, GPS, NFC); trong khi HĐH máy tính ưu tiên hiệu năng xử lý tối đa khi cắm nguồn điện trực tiếp."
    },
    {
      "id": "b1-es4",
      "q": "Một học sinh cho rằng: 'Hệ điều hành mã nguồn mở Linux không tốt bằng Windows vì nó được phát hành miễn phí'. Em hãy dùng kiến thức Tin học 11 để nhận xét về quan điểm trên.",
      "answer": "Quan điểm trên là SAI và chưa hiểu đúng về bản chất phần mềm nguồn mở:\n1. Linux miễn phí vì triết lý tự do chia sẻ tri thức, được đóng góp và kiểm thử bởi hàng triệu kỹ sư hàng đầu và các tập đoàn công nghệ lớn trên thế giới (Google, IBM, Red Hat).\n2. Linux có tính ổn định, bảo mật rất cao và tiêu tốn ít tài nguyên phần cứng hơn Windows, do đó hơn 90% siêu máy tính mạnh nhất thế giới, máy chủ đám mây Internet và hệ điều hành Android đều dùng nhân Linux.\n3. Windows phổ biến trên máy tính cá nhân vì sự thân thiện, hỗ trợ phần mềm thương mại và trò chơi phong phú, chứ không đồng nghĩa là tốt hơn Linux ở mọi mặt."
    }
  ]
};
