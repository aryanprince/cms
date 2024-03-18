import { QueryParams } from '../actions/types';
import { Folder } from '../db/course';
import { getFolderPercentCompleted } from '../lib/utils';
import { FolderView } from './FolderView';
import { NotionRenderer } from './NotionRenderer';
import { Sidebar } from './Sidebar';
import { ContentRenderer } from './admin/ContentRenderer';
import Comments from './comment/Comments';

export const CourseView = ({
  rest,
  course,
  fullCourseContent,
  courseContent,
  nextContent,
  contentType,
  searchParams,
  possiblePath,
}: {
  fullCourseContent: Folder[];
  rest: string[];
  course: any;
  courseContent: any;
  nextContent: any;
  contentType: any;
  searchParams: QueryParams;
  possiblePath: string;
}) => {
  return (
    <div className="flex h-full">
      <Sidebar fullCourseContent={fullCourseContent} courseId={course.id} />
      <div className="grow p-2 overflow-y-auto no-scrollbar">
        {contentType === 'notion' ? (
          <NotionRenderer id={courseContent[0]?.id} />
        ) : null}
        {contentType === 'video' ? (
          <ContentRenderer
            nextContent={nextContent}
            content={{
              thumbnail: courseContent[0]?.thumbnail || '',
              id: courseContent[0]?.id || 0,
              title: courseContent[0]?.title || '',
              type: contentType || 'video',
              description: courseContent[0]?.description || '',
              markAsCompleted:
                courseContent[0]?.videoProgress?.markAsCompleted || false,
            }}
          />
        ) : null}
        {(contentType === 'video' || contentType === 'notion') && (
          <Comments
            content={{
              id: courseContent[0]?.id || 0,
              commentCount: courseContent[0]?.commentsCount || 0,
              possiblePath,
            }}
            searchParams={searchParams}
          />
        )}
        {contentType === 'folder' ? (
          <FolderView
            rest={rest}
            courseContent={courseContent?.map((x: any) => ({
              title: x?.title || '',
              image: x?.thumbnail || '',
              type: x?.type || 'folder',
              id: x?.id || 0,
              markAsCompleted: x?.videoProgress?.markAsCompleted || false,
              percentComplete: getFolderPercentCompleted(x?.children),
            }))}
            courseId={parseInt(course.id, 10)}
          />
        ) : null}
      </div>
    </div>
  );
};
