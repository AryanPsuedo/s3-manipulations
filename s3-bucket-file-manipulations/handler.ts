import { S3 } from 'aws-sdk';

const s3 = new S3();

export const main = async (event: any) => {
    console.log('Event:', JSON.stringify(event, null, 2));

    const bucketName = 'serverless-s3-bucket';

    const params = {
        Bucket: bucketName,
        Key: 'test-file.txt',
        Body: 'Hello from Lambda!',
    };

    try {
        const data = await s3.putObject(params).promise();
        console.log('File uploaded successfully', data);
    } catch (err: any) {
        console.error('Error uploading file', err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'File upload failed.',
                error: err?.message,
            }),
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'File uploaded successfully!' }),
    };
};
