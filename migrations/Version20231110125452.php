<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231110125452 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE réponse (id INT AUTO_INCREMENT NOT NULL, question_id VARCHAR(36) NOT NULL, user_id VARCHAR(36) NOT NULL, contenu LONGTEXT NOT NULL, date DATETIME NOT NULL, ip LONGTEXT NOT NULL, INDEX IDX_A9A5D2E61E27F6BF (question_id), INDEX IDX_A9A5D2E6A76ED395 (user_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE réponse ADD CONSTRAINT FK_A9A5D2E61E27F6BF FOREIGN KEY (question_id) REFERENCES question (id)');
        $this->addSql('ALTER TABLE réponse ADD CONSTRAINT FK_A9A5D2E6A76ED395 FOREIGN KEY (user_id) REFERENCES user (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE réponse DROP FOREIGN KEY FK_A9A5D2E61E27F6BF');
        $this->addSql('ALTER TABLE réponse DROP FOREIGN KEY FK_A9A5D2E6A76ED395');
        $this->addSql('DROP TABLE réponse');
    }
}